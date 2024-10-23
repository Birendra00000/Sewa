const {
  userRegistration,
  userLogin,
} = require("../../Controller/PublicUser/userController");
const { userProfile } = require("../../Controller/PublicUser/userProfile.");
const {
  registerForEvent,
  getUserRegisterEvents,
} = require("../../Controller/PublicUser/userRegisterEvent");
const isAuthenticated = require("../../middleware/isAuthenticated");

const router = require("express").Router();

router.route("/register").post(userRegistration);
router.route("/userlogin").post(userLogin);
router.route("/getprofile").get(isAuthenticated, userProfile);

//ForEventRegister

router
  .route("/user/registerEvent")
  .post(isAuthenticated, registerForEvent)
  .get(isAuthenticated, getUserRegisterEvents);

module.exports = router;
