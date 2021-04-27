import express from 'express';
import data from './data.js';

const app = express();

app.get('/api/products', (req, res) => {
    res.send(data.products);
});

app.get('/', (req, res) => {
    res.send('server is ready');
})

app.listen(5000, () => {
    console.log('Server at http://localhost:5000');
});
