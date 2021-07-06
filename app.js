import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';


const app = express();



//Load Config
dotenv.config({ path: './config/config.env' });
connectDB();


app.listen(3000);