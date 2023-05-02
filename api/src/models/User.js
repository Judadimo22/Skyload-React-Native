const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
    },
    image: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    location: [
      {
        country: { type: String },
        city: { type: String },
        addres: { type: String },
      },
    ],
    review: {
      type: Array,
      ref: "Review",
    },
    userOrder: [
      {
        type: mongoose.Types.ObjectId,
        ref: "userOrderSchema",
      },
    ],
    order: {
      type: Array,
    },
    phone: {
      type: String,
      unique: false,
    },
    roll: {
      type: String,
      enum: ["admin", "user", "superAdmin"],
      default: "user",
    },
    loading: {
      type: String,
      enum: ["valid", "invalid"],
      default: "invalid",
    },
    active: {
      type: String,
      enum: ["valid", "invalid"],
      default: "valid",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);