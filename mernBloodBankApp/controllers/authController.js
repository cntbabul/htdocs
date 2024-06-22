const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerController = async (req, res) => {
  try {
    // console.log(req.body.e);
    // console.log(req.body.role);
    // console.log(req.body.name);
    // console.log(req.body.email);
    // console.log(req.body.password);
    // console.log(req.body.website);
    // console.log(req.body.address);
    // console.log(req.body.phone);

    const exisitingUser = await userModel.findOne({ email: req.body.email });
    // validation
    if (exisitingUser) {
      return res.status(200).send({
        success: false,
        message: "User ALready exists",
      });
    }
    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPassword;

    // rest data
    const user = new userModel(req.body);
    await user.save();
    return res.status(201).send({
      success: true,
      message: "User Registerd Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In Register API",
      error,
    });
  }
};

//login call back
const loginController = async (req, res) => {
  try {
    // Find the user by email
    const user = await userModel.findOne({ email: req.body.email });
    // console.log(req.body.email);
    // console.log(user.email);
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Account not found. Please register first.",
      });
    }
    //check role
    if (user.role !== req.body.role) {
      return res.status(500).send({
        success: false,
        message: "role dosn't match",
      });
    }
    //compare password
    const comparePassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!comparePassword) {
      return res.status(401).send({
        success: false,
        message: "Wrong Credential",
      });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    console.log(token);
    //succesfull login
    return res.status(200).send({
      success: true,
      message: "Login Successfully",
      token,
      user,
    });
  } catch (error) {
    console.log("Login Error", error);
    return res.status(500).send({
      success: false,
      message: "Login API Error",
      error,
    });
  }
};

//get current user
const currentUserController = async (req, res) => {
  try {
    const user = await userModel.findOne({ _id: req.body.userId });
    return res.status(200).send({
      success: true,
      message: "User fetched Successfully",
      user,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "unable to get current user",
    });
  }
};

module.exports = { registerController, loginController, currentUserController };
