import express from 'express';
import dotenv from 'dotenv';

const app = express();

// app.get('/', (req, res) => {
//     res.send('akash is the best');
// });

// app.get('/employees', (req, res) => {
//     res.send('Employees');
// });


import connectDB from './config/db.js';
//Load Config
dotenv.config({ path: './config/config.env' });

connectDB();


app.listen(3000);