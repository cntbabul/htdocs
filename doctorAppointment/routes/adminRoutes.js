const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  getAllUsersController,
  getAllDoctorsController,
  changeAccountStatusController,
} = require("../controllers/adminCtrl");
const router = express.Router();
//get method ||users
router.get("/getAllUsers", authMiddleware, getAllUsersController);
// get method ||doctors
router.get("/getAllDoctors", authMiddleware, getAllDoctorsController);
//post || acount status update
router.post(
  "/changeAccountStatus",
  authMiddleware,
  changeAccountStatusController
);
module.exports = router;
