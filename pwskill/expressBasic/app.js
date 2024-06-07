const express = require("express");
const app = express();
// const PORT = process.env.PORT || 5000;
const authRouter = require("./router/authRoute");
const databaseConnect = require("./config/dbConfig");

databaseConnect();

app.use(express.json());

app.use("/api/auth/", authRouter);

app.use("/", (req, res) => {
  res.status(200).json({ data: "server created using express server" });
});

module.exports = app;
// export default app;
