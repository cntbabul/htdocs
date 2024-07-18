const express = require("express");

const authMiddleware = require("../middlewares/authMiddleware");
const {
  getDoctorInfoController,
  updateProfileController,
  getDoctorByIdController,
} = require("../controllers/doctorCtrl");
const router = express.Router();

//post single doc info
router.post("/getDoctorInfo", authMiddleware, getDoctorInfoController);

//post ||update profile
router.post("/updateProfile", authMiddleware, updateProfileController);

//post ||Booking Page
router.post("/getDoctorById", authMiddleware, getDoctorByIdController);

module.exports = router;
