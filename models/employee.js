import mongoose from 'mongoose';


const Employee = mongoose.model('Employee',{
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    }
});

export default Employee;


