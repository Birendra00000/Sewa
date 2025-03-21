const eventSchema = require("../Model/eventModel");
const cloudinary = require("../cloudinaryConfig");

exports.createEvent = async (req, res) => {
  try {
    const orgId = req.userOrOrg.id; // Organization ID from the authenticated user
    console.log("OrganizationId", orgId); // Debugging log to check the orgId
    console.log(req.body); // Log the request body for debugging
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
      eventCapacity,
      category,
    } = req.body;
    if (
      !title ||
      !description ||
      !location ||
      !eventCapacity ||
      !category ||
      !startDate ||
      !startDate
    ) {
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
      eventCapacity,
      category,
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

//UPDATE The Events

exports.updateEvents = async (req, res) => {
  try {
    const eventId = req.params.id;
    if (!eventId) {
      return res.status(400).json({
        message: "Pleased provide EventId",
      });
    }

    const {
      eventTitle,
      eventDescription,
      eventLocation,
      startDate,
      deadlineDate,
      eventCapacity,
      category,
    } = req.body;

    let imageUrl = "";
    if (req.file) {
      imageUrl = req.file.path;
    }

    const eventData = await eventSchema.findById(eventId);

    if (!eventData) {
      return res.status(400).json({
        message: "Event Not Found",
      });
    }

    const updateEvent = await eventSchema.findByIdAndUpdate(
      eventId,
      {
        eventTitle,
        eventDescription,
        eventLocation,
        startDate,
        deadlineDate,
        eventCapacity,
        category,
        imageUrl: imageUrl || eventData.eventImage,
      },
      { new: true, runValidators: true }
    );
    return res.status(200).json({
      message: "Event updated successfully",
      data: updateEvent,
    });
  } catch (error) {
    console.error("Error updating event:", error);
    res.status(500).json({ message: "Internal Server Error" });
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
//getallevent
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

exports.searchEvents = async (req, res) => {
  try {
    const { location, title } = req.query; // Get search parameters from query

    // Build the query object
    const query = {};

    if (location) {
      query.eventLocation = { $regex: location, $options: "i" }; // Case-insensitive search for location
    }

    if (title) {
      query.eventTitle = { $regex: title, $options: "i" }; // Case-insensitive search for title
    }

    // Fetch events based on the query
    const events = await eventSchema.find(query);

    if (events.length > 0) {
      res.status(200).json({
        message: "Events fetched successfully",
        data: events,
      });
    } else {
      res.status(404).json({
        message: "No events found matching the criteria",
      });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: "Error fetching events",
      error: error.message,
    });
  }
};
