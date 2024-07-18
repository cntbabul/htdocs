const userModel = require("../model/userSchema");
const emailValidator = require("email-validator");
const bcrypt = require("bcrypt");

//signup controller
const signup = async (req, res, next) => {
  const { name, email, password, confirmPassword } = req.body;
  console.log(name, email, password, confirmPassword);
  try {
    const userInfo = userModel(req.body);
    const result = await userInfo.save();

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    //email validate
    const validEmail = emailValidator.validate(email);
    if (!validEmail) {
      return res.status(400).json({
        success: false,
        message: "Invalid email",
      });
    }
    //password confirmPassword
    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Password and confirm password do not match",
      });
    }

    return res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    if (error.code == 11000) {
      return res.status(400).json({
        success: false,
        message: "Email already exists",
      });
    }
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

//sign in controller
const signIn = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Please enter email and password",
    });
  }
  try {
    const user = await userModel
      .findOne({
        email,
      })
      .select("+password");
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });
    }
    const token = user.jwtToken();
    user.password = undefined;

    //cookie
    const cookieOpton = {
      maxAge: 24 * 60 * 60 * 1000,
      httpOnly: true,
    };
    res.cookie("token", token, cookieOpton);
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (e) {
    // console.log(er);
    res.status(400).json({
      success: false,
      message: e.message,
    });
  }
};

//get user
const getUser = async (req, res, next) => {
  const userId = req.user.id;
  // console.log(userId);
  // console.log(req.body);

  try {
    const user = await userModel.findById(userId);
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (e) {
    return res.status(400).json({
      success: false,
      message: e.message,
    });
  }
};

//logout
const logout = async (req, res, next) => {
  try {
    const cookieOption = {
      expires: new Date(), // current expiry date
      httpOnly: true, //  not able to modify  the cookie in client side
    };

    // return response with cookie without token
    res.cookie("token", null, cookieOption);
    res.status(200).json({
      success: true,
      message: "Logged Out",
    });
  } catch (error) {
    res.stats(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { signup, signIn, getUser, logout };
