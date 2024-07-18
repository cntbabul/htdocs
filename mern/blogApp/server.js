const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const colors = require("colors");
const dotenv = require("dotenv");
const connectDB = require("./configDb/db");
const userRoutes = require("./routes/userRoutes");
const blogRoutes = require("./routes/blogRoutes");

//config
dotenv.config();

//config db

connectDB();

//rest object
const app = express();

//thirdparty middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/blog", blogRoutes);

const PORT = process.env.PORT || 5000;
//listen

app.listen(
  PORT,
  console.log(
    `Server running in ${
      process.env.NODE_ENV || "http://localhost:"
    }  on port ${PORT}`.bgWhite.green.bold
  )
);
