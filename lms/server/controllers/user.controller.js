import AppError from "../utils/error.util.js";
import User from "../model/user.model.js";
import fs from "fs/promises";
import cloudinary from "cloudinary";
// import { send } from "process";
import sendEmail from "../utils/sendEmail.js";

const cookieOptions = {
  maxAge: 7 * 24 * 60 * 60 * 1000,
  httpOnly: true,
  secure: true,
};

//register controller
const register = async (req, res, next) => {
  const { fullName, email, password } = req.body;
  if (!fullName || !email || !password) {
    return next(new AppError("All fields are required", 400));
  }
  //email validate
  const userExist = await User.findOne({ email });
  if (userExist) {
    return next(new AppError("Email already exists", 400));
  }
  const user = await User.create({
    fullName,
    email,
    password,
    avatar: {
      public_id: email,
      url: "https://res.cloudinary.com/du9jzqlpt/image/upload/v1674647316/avatar_drzgxv.jpg",
    },
  });

  if (!user) {
    return next(new AppError("User not created Please try again", 400));
  }

  //file upload
  console.log(req.file);
  if (req.file) {
    try {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "lms",
        width: 250,
        height: 250,
        crop: "fill",
        gravity: "face",
      });
      if (result) {
        user.avatar.public_id = result.public_id;
        user.avatar.secure_url = result.secure_url;
        //remove local file
        fs.rm(`uploads/${req.file.filename}`);
      }
    } catch (error) {
      return next(new AppError(error || "File upload failed", 400));
    }
  }

  //save
  await user.save();
  user.password = undefined;
  const token = await user.generateJWTToken();
  res.cookie("token", token, cookieOptions);
  res.status(200).json({
    success: true,
    message: "User created successfully",
    user,
  });
};
//login controller
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return next(new AppError("All fields are required", 400));
    }
    console.log(email, password);
    const user = await User.findOne({ email }).select("+password");

    if (!user || !(await user.comparePassword(password))) {
      return next(new AppError("Invalid email or password", 400));
    }

    const token = await user.generateJWTToken();
    user.password = undefined;
    res.cookie("token", token, cookieOptions);
    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      user,
    });
  } catch (error) {
    //console.log(error);

    return next(new AppError("login controller error", 500));
  }
};

//logout controller
const logout = async (req, res) => {
  res.cookie("token", null, {
    secure: true,
    maxAge: 0,
    httpOnly: true,
  });
  res.status(200).json({
    success: true,
    message: "user logout successfully",
  });
};
///me controller

const getProfile = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId);

    res.status(200).json({
      success: true,
      message: "User fetched successfully",
      user,
    });
  } catch (error) {
    return next(new AppError(error.message, 500));
  }
};

//forgot password controller
const forgotPassword = async (req, res, next) => {
  const { email } = req.body;
  if (!email) {
    return next(new AppError("Please enter email", 400));
  }
  const user = await User.findOne({ email });
  if (!user) {
    return next(new AppError("User not found", 400));
  }

  const resetToken = user.createPasswordResetToken();
  await user.save();
  const resetPasswordURL = `${process.env.FRONTED_URL}/reset-password/${resetToken}`;

  const subject = "Reset Password";
  const message = `Your password reset token is :- \n\n ${resetPasswordURL} \n\n If you have not requested this email then, please ignore it.`;
  //send email
  try {
    await sendEmail(email, subject, message);
    res.status(200).json({
      success: true,
      message: `Password reset link sent to &{email}`,
    });
  } catch (error) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save();
    return next(new AppError(error.message, 500));
  }
};

//reset password controller
//module 65 3rd video time 1:0:0
const resetPassword = async (req, res, next) => {};

export { register, login, logout, getProfile, forgotPassword, resetPassword };
