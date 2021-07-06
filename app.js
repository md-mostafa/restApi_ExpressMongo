import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('akash is the best');
});

app.get('/employees', (req, res) => {
    res.send('Employees');
});

app.listen(3000);