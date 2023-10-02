import app from './app.js';
import connectionToDB from './config/dbConnection.js';



// import express from 'express';



const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
    await connectionToDB();
    console.log(`App is Runnning at http://localhost:${PORT}`);
});export default app;
