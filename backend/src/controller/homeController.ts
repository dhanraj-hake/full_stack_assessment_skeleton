import { Request, Response } from 'express';
import { Home } from '../entity/Home';
import { AppDataSource } from '../db';
import { User } from '../entity/User';
import { In } from 'typeorm';

export const findByUser = async (req: Request, res: Response) => {
    const username = req.query.username as string;

    if (!username) {
        return res.status(400).json({ message: "username query parameter is required" });
    }

    const userRepository = AppDataSource.getRepository(User);

    try {
        const user = await userRepository.findOne({
            where: { username },
            relations: ['homes'],
        });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        return res.json(user.homes);
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", error });
    }
};

export const updateUsersForHome = async (req: Request, res: Response) => {
    const { street_address, usernames } = req.body;

    if (!street_address || !Array.isArray(usernames)) {
        return res.status(400).json({ message: "street_address and usernames are required" });
    }

    const homeRepository = AppDataSource.getRepository(Home);
    const userRepository = AppDataSource.getRepository(User);

    try {
        const home = await homeRepository.findOne({
            where: { street_address },
            relations: ['users'],
        });

        if (!home) {
            return res.status(404).json({ message: "Home not found" });
        }

        const users = await userRepository.find({where:{username : In(usernames)}});

        home.users = users;
        await homeRepository.save(home);

        return res.json({ message: "Users updated successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", error });
    }
};