const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

//dotenv config
dotenv.config();

//mongodb conn

connectDB();

//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(morgan("dev"));

//routes
app.get("/", (req, res) => {
  res.status(200).send({
    message: "Welcome to Doctor Appointment API",
  });
});

//port
const PORT = process.env.PORT || 5000;
//listen port
app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_MODE} mode on port ${PORT}`.red.bold
  );
});
