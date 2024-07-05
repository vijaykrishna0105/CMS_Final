import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { dbConnection } from './database/dbConnection.js'; // Assuming this is how you import dbConnection
import { errorMiddleware } from './error/error.js'; // 
import Claim from './routes/claim.js';

const app = express();
dotenv.config({ path: './config/config.env' });

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Call dbConnection function to establish MongoDB connection
dbConnection();

// Mount your routes here (for example, Claim route)
app.use('/api/v1/claim', Claim);


// Use errorMiddleware directly as middleware
app.use(errorMiddleware);

export default app;
