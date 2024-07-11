const express = require("express");
const {
  getAllUsers,
  registerController,
  loginController,
} = require("../controllers/userControllers");

const router = express.Router();

//routes get all users
router.get("/all-users", getAllUsers);
//register user || post
router.post("/register", registerController);
//login user || post
router.post("/login", loginController);
//logout user

module.exports = router;
