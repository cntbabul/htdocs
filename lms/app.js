const express = require("express");
const app = express();
const authRouter = require("./route/authRoute");
app.use(express.json());

app.use("/api/auth/", authRouter);
app.use("/", (req, res) => {
  res.status(200).json({ data: "JWT aserver" });
});

module.exports = app;
