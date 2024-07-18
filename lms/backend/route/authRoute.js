const express = require("express");
const authRouter = express.Router();
const {
  signup,
  signIn,
  getUser,
  logout,
} = require("../controller/authController");
const jwtAuth = require("../middleware/jwtAuth");

authRouter.post("/signup", signup);
authRouter.post("/sigin", signIn);
authRouter.get("/user", jwtAuth, getUser);
authRouter.get("/logout", jwtAuth, logout);

module.exports = authRouter;
