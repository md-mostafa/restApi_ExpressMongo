import express from 'express';
import Employee from '../models/employee.js';
const router = express.Router();


//GET ALL Employees;
router.get('/api/employees', (req, res) => {
    Employee.find({}, (err, data) => {
        if(!err) {
            res.send(data);
        }else {
            console.log(err);
        }
    });
});

export default router;
