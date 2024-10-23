const eventModel = require("../../Model/eventModel");
const userModel = require("../../Model/PublicUser/userModel");

exports.registerForEvent = async (req, res) => {
  try {
    const userId = req.userOrOrg.id;
    const { eventId } = req.body;
    console.log(userId);

    console.log(eventId);
    const eventChecked = await eventModel.findById(eventId);

    if (!eventChecked) {
      return res.status(400).json({
        message: "Event not found",
      });
    }

    const userChecked = await userModel.findById(userId);

    if (!userChecked) {
      return res.status(400).json({
        message: "User not found",
      });
    }

    // Check if the user is already registered for the event

    if (userChecked.registeredEvents.includes(eventId)) {
      return res
        .status(400)
        .json({ message: "Already registered for this event" });
    }

    // Add event to user's registered events

    userChecked.registeredEvents.push(eventId);
    await userChecked.save();
    res
      .status(200)
      .json({ message: "Registered for event successfully", user });
  } catch (error) {
    console.log(error.message);

    res
      .status(400)
      .json({ message: "Error registering for event", error: error.message });
  }
};

exports.getUserRegisterEvents = async (req, res) => {
  try {
    const userId = req.userOrOrg.id;
    console.log(userId);
    const userChecked = await userModel
      .findById(userId)
      .populate("registeredEvents");

    if (!userChecked) {
      return res.status(400).json({
        message: "User not found",
      });
    }

    return res.status(200).json({
      message: "Event Register successfully",
      registeredEvents: userChecked.registeredEvents,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: "Error fetching registered events",
      error: error.message,
    });
  }
};
