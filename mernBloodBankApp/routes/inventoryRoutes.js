const express = require('express');
const createInventoryController = require("../controllers/inventoryController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

//routes
router.post("/create-inventory", authMiddleware, createInventoryController)

module.exports.router