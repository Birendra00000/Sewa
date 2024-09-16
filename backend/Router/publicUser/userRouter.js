const {
  userRegistration,
  userLogin,
} = require("../../Controller/PublicUser/userController");

const router = require("express").Router();

router.route("/register").post(userRegistration);
router.route("/userlogin").post(userLogin);

module.exports = router;
