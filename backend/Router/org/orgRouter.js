const {
  orgRegistartion,
} = require("../../Controller/OrgController/orgController");
const upload = require("../../services/upload");

const router = require("express").Router();

router.route("/orgRegistration").post(upload.single("image"), orgRegistartion);

module.exports = router;
