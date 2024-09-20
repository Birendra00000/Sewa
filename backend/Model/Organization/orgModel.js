const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orgSchema = new Schema({
  orgName: {
    type: String,
    required: [true, "Organization name must be provided"],
  },
  orgAddress: {
    type: String,
    required: [true, "Organization address must be provided"],
  },
  orgDescription: {
    type: String,
    required: [true, "Organization description must be provided"],
  },
  orgEmail: {
    type: String,
    required: [true, "Organization email must be provided"],
  },
  orgPassword: {
    type: String,
    required: [true, "Organization email must be provided"],
  },
  orgContact: {
    type: String,
    required: [true, "Organization Contact must be provided"],
  },
  websiteUrl: {
    type: String,
    default: "",
  },
  orgImage: {
    type: String,
    default: "",
  },
  // New field to track approval status
  isApproved: {
    type: Boolean,
    default: false, // Default to false (pending approval)
  },
});

module.exports = mongoose.model("orgSchema", orgSchema);
