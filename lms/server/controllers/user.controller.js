import AppError from "../utils/error.util.js";
import User from "../model/user.model.js";
import fs from "fs/promises";
import cloudinary from "cloudinary";
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

export { register, login, logout, getProfile };
