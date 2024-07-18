const express = require('express');
const app = express();
const authRouter = require('./router/authRoute.js');


app.use('/api/auth/', authRouter);

app.use('/', (req, res) => {
    res.status(200).json({data:'JWToken server -updated'})
});

module.exports = app;