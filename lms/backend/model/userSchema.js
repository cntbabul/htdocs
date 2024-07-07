const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "User name is required"],
      minLength: [5, "User name should be at least 5 characters"],
      maxLenght: [20, "User name should not be more than 20 characters"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      unique: [true, "Email already exists"],
    },
    password: {
      type: String,
      select: false,
      required: [true, "Password is required"],
    },
    forgetPasswordToken: {
      type: String,
    },
    forgetPasswordExpiry: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);
// Hash password before saving to the database
userSchema.pre("save", async function (next) {
  // If password is not modified then do not hash it
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  return next();
});

userSchema.methods = {
  jwtToken() {
    return JWT.sign(
      { id: this._id, email: this.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );
  },
};

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
