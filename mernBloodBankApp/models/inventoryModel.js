const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema(
  {
    inventoryType: {
      type: String,
      required: [true, "inventory type required"],
      enum: ["in", "out"],
    },
    bloodGroup: {
      type: "String",
      required: [true, "Blood Group Required"],
      enum: ["O+", "O-", "AB+", "AB-", "A+", "A-", "B+", "B-"],
    },
    quantity: {
      type: Number,
      required: [true, "Blood quantity Required"],
    },
    email: {
      type: String,
      required: [true, "Donar Email is Required"],
    },

    organisation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users", // this is a reference to the users model
      required: [true, "organization is required"], // this required field will throw an error if the field is not provided when creating a new inventory record
    },
    hospital: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: function () {
        return this.inventoryType === "out";
      },
    },
    donar: {
      type: mongoose.Schema.ObjectId,
      ref: "users",
      required: function () {
        return this.inventoryType === "in";
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("inventory", inventorySchema);
