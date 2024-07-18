const express = require("express");
const {
  loginController,
  registerController,
  authController,
  applyDoctorController,
  getAllNotificationController,
  deleteAllNotificationController,
  getAllDoctorsController,
} = require("../controllers/userCtrl");
const authMiddleware = require("../middlewares/authMiddleware");

//router onject
const router = express.Router();

//routes
//LOGIN || POST
router.post("/login", loginController);

//REGISTER || POST
router.post("/register", registerController);

//auth || post
router.post("/getUserData", authMiddleware, authController);

//apply doctor || post
router.post("/apply-doctor", authMiddleware, applyDoctorController);
module.exports = router;

//get all notification   || post
router.post(
  "/get-all-notification",
  authMiddleware,
  getAllNotificationController
);
//delete all notification || post
router.post(
  "/delete-all-notification",
  authMiddleware,
  deleteAllNotificationController
);

//get all doc
router.get("/getAllDoctors", authMiddleware, getAllDoctorsController);

module.exports = router;
