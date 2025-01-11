const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema(
  {
    eventTitle: {
      type: String,
      required: [true, "Title must be provided"],
    },
    eventDescription: {
      type: String,
      required: [true, "Description must be provided"],
    },
    eventLocation: {
      type: String,
      required: [true, "Description must be provided"],
    },
    eventImage: {
      type: String,
      default: "",
    },
    startDate: {
      type: Date,
      required: [true, "StartDate must be provided"],
    },
    deadlineDate: {
      type: Date,
      required: [true, "Deadline Date must be provided"],
    },

    eventCapacity: {
      type: Number,
    },
    category: {
      type: String,
      enum: [
        "Social Events",
        "Technology Workshop",
        "Education",
        "Healthcare",
        "Sports",
        "Entertainment",
      ],
      required: [true, "Event category must be provided"],
    },
    participants: {
      type: [Schema.Types.ObjectId], // References to user IDs
      ref: "User", // Reference model (optional)
      default: [], // Default to an empty array
    },
    organization: {
      type: Schema.Types.ObjectId,
      ref: "orgSchema",
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("eventSchema", eventSchema);
