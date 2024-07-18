const express = require("express");
const app = express();

const authRouter = require("./route/authRoute");
const databaseconnect = require("./config/databaseConfig");
const cors = require("cors");
const cookieParser = require("cookie-parser");
//database connect
databaseconnect();

app.use(express.json()); // Built-in middleware
app.use(cookieParser()); // Third-party middleware

app.use(cors({ origin: [process.env.CLIENT_URL], credentials: true })); //Third-party middleware

app.use("/api/v1/auth", authRouter);
app.use("/", (req, res) => {
  res.status(200).json({ data: "JWT aserver" });
});

module.exports = app;
