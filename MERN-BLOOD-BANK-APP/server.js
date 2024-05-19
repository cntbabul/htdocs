const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const cors = require('cors');

//dot config
dotenv.config();

const app = express()

//middlewares
app.use

//route test 
app.use('/api/v1/test', require('./routes/testRoutes'))

//port
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log("Node server Running....")
}) ;
