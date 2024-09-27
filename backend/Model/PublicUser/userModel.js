const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "Firstname must be provided"],
  },
  lastName: {
    type: String,
    required: [true, "Lastname must be provided"],
  },
  contactNumber: {
    type: String,
    required: [true, "Contact number must be provided"],
  },
  email: {
    type: String,
    required: [true, "Gmail must be provided"],
  },
  password: {
    type: String,
    required: [true, "Password must be provided"],
  },

  skill: {
    type: String,
    enum: ["Hospitals", "Orphanages", "Schools", "Community Services"],
    default: ["Community Services"],
  },
  address: {
    type: String,
    required: [true, "Addresss must be provided"],
  },

  role: { type: String, default: "user" }, // Always set as organization
});
module.exports = mongoose.model("userSchema", userSchema);
