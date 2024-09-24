const orgModel = require("../Model/Organization/orgModel");
const userModel = require("../Model/PublicUser/userModel");

const isOrganization = async (req, res, next) => {
  const userId = req.user.id;
  console.log(userId);
  // Check if user exists in User schema
  const user = await userModel.findById(userId);
  if (user) {
    return res.status(403).json({ message: "Users cannot create events." });
  }

  // Check if organization exists in Organization schema
  const organization = await orgModel.findById(userId);
  if (!organization) {
    return res
      .status(403)
      .json({ message: "Only organizations can create events." });
  }

  // If the organization exists, proceed
  next();
};

module.exports = isOrganization;
