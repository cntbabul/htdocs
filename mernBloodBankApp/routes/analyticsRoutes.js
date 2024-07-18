const express = require("express");
const authMiddelware = require("../middleWares/authMiddleWare");
const {
  bloodGroupDetailsContoller,
} = require("../controllers/analyticController");

const router = express.Router();

//routes

//GET BLOOD DATA
router.get("/bloodGroups-data", authMiddelware, bloodGroupDetailsContoller);

module.exports = router;
