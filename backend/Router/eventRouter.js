const {
  createEvent,
  deleteEvent,
  getEvent,
  getSingleEvent,
  searchEvents,
} = require("../Controller/eventController");
const isAuthenticated = require("../middleware/isAuthenticated");
const isOrganization = require("../middleware/isOrganization");
const upload = require("../services/upload");

const router = require("express").Router();

router
  .route("/event")
  .post(isAuthenticated, isOrganization, upload.single("image"), createEvent)
  .get(getEvent);

// Route for searching events
router.route("/search").get(searchEvents);

//for getting singleEvent
router.route("/event/:id").delete(deleteEvent).get(getSingleEvent);

module.exports = router;
