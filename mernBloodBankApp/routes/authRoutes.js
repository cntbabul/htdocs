const express = require("express");
const {
  registerController
 } = require("../controllers/authController");
const { loginController } = require("../controllers/authController");
// const authMiddelware = require("../middlewares/authMiddelware");

const router = express.Router();

//routes
//REGISTER || POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);

// //GET CURRENT USER || GET
// router.get("/current-user", authMiddelware, currentUserController);

module.exports = router;