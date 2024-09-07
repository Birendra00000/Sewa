const eventSchema = require("../Model/eventModel");
const cloudinary = require("../cloudinaryConfig");

exports.createEvent = async (req, res) => {
  try {
    console.log(req.body);
    const file = req.file;
    let imageUrl;

    if (file) {
      // Cloudinary upload already handled by multer
      imageUrl = file.path; // This is the Cloudinary URL
    } else {
      imageUrl = ""; // No image provided
    }

    const {
      title,
      description,
      location,
      startDate,
      deadlineDate,
      eventStatus,
    } = req.body;
    if (!title || !description || !location || !startDate || !startDate) {
      return res.status(400).json({
        message: "Missing required fields",
      });
    }

    // Create a new todo item with the image URL
    const eventCreate = await eventSchema.create({
      eventTitle: title,
      eventDescription: description,
      eventImage: imageUrl,
      eventLocation: location,
      startDate,
      deadlineDate,
      eventStatus,
    });

    res.status(200).json({
      message: "Event created successfully",
      data: eventCreate,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: "Error creating Event",
      error: error.message,
    });
  }
};

//FOR DELETING EVENT
exports.deleteEvent = async (req, res) => {
  try {
    const eventId = req.params.id;
    if (!eventId) {
      return res.status(400).json({
        message: "Pleased provide eventId",
      });
    }
    // console.log(eventId);

    const eventExist = await eventSchema.findById(eventId);

    if (!eventExist) {
      return res.status(400).json({
        message: "Event Not Found",
      });
    }
    const eventDelete = await eventSchema.findByIdAndDelete(eventId);

    res.status(200).json({
      message: "Event deleted successfully",
      data: eventDelete,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: "Error deleting Event",
      error: error.message,
    });
  }
};

exports.getEvent = async (req, res) => {
  try {
    const getAllEvent = await eventSchema.find();
    if (getAllEvent.length > 0) {
      res.status(200).json({
        message: "Successfully fetched all event",
        getAllEvent,
      });
    } else {
      res.status.json({
        message: "Event not found",
      });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: "Error fetching all Event",
      error: error.message,
    });
  }
};
//for getting singleEvent
exports.getSingleEvent = async (req, res) => {
  try {
    const eventId = req.params.id;
    if (!eventId) {
      return res.status(400).json({
        message: "Pleased provide eventId",
      });
    }
    // console.log(eventId);

    const eventExist = await eventSchema.findById(eventId);

    if (!eventExist) {
      return res.status(400).json({
        message: "Event Not Found",
      });
    }
    const singleEvent = await eventSchema.findById(eventId);

    res.status(200).json({
      message: "Single event fetched successfully",
      data: singleEvent,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: "Error deleting Event",
      error: error.message,
    });
  }
};