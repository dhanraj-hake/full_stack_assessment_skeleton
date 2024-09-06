import express from 'express';
import 'reflect-metadata';
import userRoutes from './routes/userRoutes';
import homeRoutes from './routes/homeRoutes';
import { AppDataSource } from './db';
import cors from 'cors';
import { config } from 'dotenv';

config();

const PORT = process.env.PORT || 8000;

const app = express();
app.use(express.json());
app.use(cors());

app.use('/user', userRoutes);
app.use('/home', homeRoutes);

AppDataSource.initialize()
    .then(() => {
        console.log("Connected to Database")
    })
    .catch((err) => {
        console.error("Error to Connecting Database", err)
    })

app.listen(PORT, () => {
    console.log(`Server is running on  http://127.0.0.1:${PORT}`);
});
