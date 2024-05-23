const express = require('express')
const authMiddleWare = require("../middleWares/authMiddleWare");

const {createInventoryController} = require("../controllers/inventoryController");
// const { getInventoryController } = require("../controllers/inventoryController");

const router = express.Router()

//routes
router.post("/create-inventory", authMiddleWare  ,createInventoryController)

// //GET ALL BLOOD RECORDS
// router.get("/get-inventory", authMiddleWare, getInventoryController);

// console.log(typeof createInventoryController);
// console.log(typeof getInventoryController);


module.exports = router;