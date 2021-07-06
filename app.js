import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import employeeRoutes from './routes/index.js';


const app = express();
app.use(express.json());



//Load Config
dotenv.config({ path: './config/config.env' });
connectDB();

//Routes
app.use('/', employeeRoutes);


app.listen(3000);