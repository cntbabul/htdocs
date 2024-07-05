const express = require("express");
const authRouter = express.Router();
const { signup } = require("../controller/authController");

authRouter.post("/", signup);

module.exports = authRouter;
