import express from 'express';
import Employee from '../models/employee.js';
const router = express.Router();


//GET ALL Employees;
router.get('/api/employees', (req, res) => {
    Employee.find({}, (err, data) => {
        if(!err) {
            console.log(data);
            res.send(data);
        }else {
            console.log(err);
        }
    });
});


//Save Employess
router.post('/api/employees/add', (req, res) => {
    const emp = new Employee({
        name: req.body.name,
        email: req.body.email,
        salary: req.body.salary
    });
    console.log(emp);

    emp.save((err, data) => {
        res.status(200).json({ code: 200, message: 'Employee Added Successfully', addEmployee: data});
    });
});


// Get Single Employee
router.get('/api/employees/:id', (req, res) => {
    Employee.findById(req.params.id, (err, data) => {
        if(!err) {
            console.log(data);
            res.send(data);
        }else{
            console.log(err);
        }
    });
});


//update the employee


router.put('/api/employees/edit/:id', (req, res) => {
    const emp = {
        name: req.body.name,
        email: req.body.email,
        salary: req.body.salary
    };

    Employee.findByIdAndUpdate(req.params.id, { $set:emp }, { new: true}, (err, data) => {
        if(!err) {
            res.status(200).json({ code: 200, message: 'Employee Updated Successfully', updatedEmployee: data });
        }else {
            console.log(err);
        }
    })
});


//Delete employee

router.delete('/api/employees/:id', (req, res) => {
    Employee.findByIdAndRemove(req.params.id, (err, data) => {
        if(!err) {
            res.status(200).json({ code:200, message: 'Employee Deleted Successfully', deletedEmployee: data });
        }
    });
});



export default router;
