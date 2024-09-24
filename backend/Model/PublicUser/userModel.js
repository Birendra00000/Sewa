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
  role: { type: String, default: "user" }, // Always set as organization
  participationType: {
    type: String,
    enum: ["volunteer", "attendee"],
    default: ["volunteer"],
    required: false, // Optional: Add if you want the field to be mandatory
  },
});
module.exports = mongoose.model("userSchema", userSchema);
