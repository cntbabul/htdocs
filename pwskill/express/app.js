require('dotenv').config();
const express = require('express');


const app = express();

app.get('/', (req, res) => {
    res.send('Server is running ')
})


// export default app;
module.exports = app;