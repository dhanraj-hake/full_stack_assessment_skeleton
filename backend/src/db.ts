import { DataSource } from "typeorm";
import { User } from "./entity/User";
import { Home } from "./entity/Home";
import { config } from 'dotenv';

config();

export const AppDataSource = new DataSource({
    type: process.env.TYPEORM_CONNECTION as any,
    host: process.env.TYPEORM_HOST,
    port: process.env.TYPEORM_PORT as any,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    entities : [User, Home]
})
