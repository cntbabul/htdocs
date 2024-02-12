const express = require("express");
const app = express();

const PORT = 3020;
const HOSTNAME = 'localhost';

app.get('/', (req, res) => {
    res.send('Welcome to Express Server');
})



app.listen(PORT, () => {
    console.log(`Server Running at ${HOSTNAME} : ${PORT}`);
})