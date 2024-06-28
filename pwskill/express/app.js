require('dotenv').config();
const express = require('express');


const app = express();

app.get('/', (req, res) => {
    res.send('Server is running with Express ')
})


// export default app;
module.exports = app;