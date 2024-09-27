const {
  orgRegistartion,
  orgLogin,
} = require("../../Controller/OrgController/orgController");
const upload = require("../../services/upload");

const router = require("express").Router();

router
  .route("/orgRegistration")
  .post(upload.single("orgImage"), orgRegistartion);
router.route("/orglogin").post(orgLogin);

module.exports = router;
