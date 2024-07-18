const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");

//getAllUsers
exports.getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    res.status(200).json({
      userCount: users.length,
      success: true,
      message: "All users",
      users,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error(getAllUsersController)",
    });
  }
};

//register user
exports.registerController = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    if (!userName || !email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Please add all fields" });
    }

    const userIsExist = await userModel.findOne({ email });

    if (userIsExist) {
      return res
        .status(400)
        .json({ success: false, message: "User already exist" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const passwordToBeSaved = hashedPassword;

    const user = new userModel({
      userName,
      email,
      password: passwordToBeSaved,
    });

    await user.save();
    res.status(201).json({
      success: true,
      message: "User created successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Unable to register. Please try again",
      error,
    });
  }
};

//login user
exports.loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Please add email and password" });
    }
    const user = await userModel.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "User does not exist" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ success: false, message: "Incorrect password" });
    }
    // const token = await user.generateAuthToken();
    res.status(200).json({
      success: true,
      message: "Login successful",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error(loginController)",
      error,
    });
  }
};

//logout user
exports.logoutController = async (req, res) => {};
