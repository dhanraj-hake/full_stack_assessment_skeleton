import { Request, Response } from 'express';
import { User } from '../entity/User';
import { AppDataSource } from '../db';
import { Home } from '../entity/Home';

export const findAllUsers = async (req: Request, res: Response) => {
    const userRepository = AppDataSource.getRepository(User);
    const users = await userRepository.find();
    res.json(users);
};

export const findByHome = async (req: Request, res: Response) => {
    const street_address = req.query.street_address as string;

    if (!street_address) {
        return res.status(400).json({ message: "street_address query parameter is required" });
    }

    const homeRepository = AppDataSource.getRepository(Home);

    try {
        const home = await homeRepository.findOne({
            where: { street_address },
            relations : {
                users : true
            }
        });

        if (!home) {
            return res.status(404).json({ message: "Home not found" });
        }

        return res.json(home.users);
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", error });
    }
};
