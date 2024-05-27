const mongoose = require("mongoose");
const userModel = require('../models/userModel');
// this controller will handle the creation of inventory
const inventoryModel = require("../models/inventoryModel");

const createInventoryController =  async(req, res) => {
    try {
        const {email, inventoryType} = req.body
        console.log(email)
        //validation
        const user = await userModel.findOne({email});
        if (!user) {
            throw new Error('User not found');
        }
        if (inventoryType === "in" && user.role !=='donar' ){
            throw new Error('You are not logged in as a donar') 
        }
        if (inventoryType ==="out" && user.role !== 'hospital'){
           throw new Error('You are not logged in as a hospital')
        }

        //save record
        const inventory = new inventoryModel(req.body);
        await inventory.save()
        return res.status(201).send({
            success:true,
            message:'New blood Record Added'
        })


        
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: 'Inventory creating api error(inventoryController)',
            error,
        })
    }
}

// GET ALL BLOOD RECORDS
const getInventoryController = async (req, res) => {
    try {
      const inventory = await inventoryModel
        .find({
          organisation: req.body.userId,
        })
        .populate("donar")
        .populate("hospital")
        .sort({ createdAt: -1 });
        
      return res.status(200).send({
        success: true,
        messaage: "get all records successfully",
        inventory
      });
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        success: false,
        message: "Error In Get All Inventory",
        error,
      });
    }
  };




module.exports = {createInventoryController, getInventoryController}
