const { RestartProcess } = require("concurrently");
const userModel = require("../model/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//register controller
const registerController = async (req, res) => {
  try {
    // const { email } = req.body;
    const existingUser = await userModel.findOne({ email: req.body.email });
    if (existingUser) {
      return res
        .status(200)
        .send({ success: false, message: "User Already Exists" });
    }

    const password = req.body.password;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    req.body.password = hashedPassword;

    const newUser = new userModel(req.body);
    await newUser.save();
    res.status(201).send({
      success: true,
      message: "User Created Successfully !!! Redirecting to Login",
      data: newUser,
    });
  } catch (error) {
    console.log(error);
    res.status(200).send({
      success: false,
      message: `Error in Registeration(registerController) ${error.message}`,
    });
  }
};
//login controller
const loginController = async (req, res) => {
  try {
    const user = await userModel.findOne({ email: req.body.email });
    if (!user) {
      return res.status(200).send({
        success: false,
        message: "User Not Found !!! Please Register",
      });
    }
    //password match
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res.status(200).send({
        success: false,
        message: "Incorrect Password !!!",
      });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.status(200).send({
      success: true,
      message: "Login Success",
      user,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Error in Login(controller) ${error.message}`,
    });
  }
};

//auth controller
const authController = async (req, res) => {
  try {
    const user = await userModel.findOne({ _id: req.body.userId });

    if (!user) {
      return res.status(200).send({
        message: "User not found",
        success: false,
      });
    } else {
      res.status(200).send({
        success: true,
        data: {
          name: user.name,
          email: user.email,
        },
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Error in Auth(controller) ${error.message}`,
    });
  }
};

module.exports = { loginController, registerController, authController };
