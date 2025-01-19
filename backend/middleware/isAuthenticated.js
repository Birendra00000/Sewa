const jwt = require("jsonwebtoken");
const userModel = require("../Model/PublicUser/userModel");
const orgModel = require("../Model/Organization/orgModel");
const promisify = require("util").promisify;

const isAuthenticated = async (req, res, next) => {
  // Extract the token from the 'Authorization' header
  const authHeader = req.headers.authorization;
  // console.log("Request Headers:", authHeader);

  // Check if the token exists
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(403).json({
      message: "Please provide a token",
    });
  }

  // Extract the token from the header
  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(400).json({ message: "Token is missing" });
  }
  try {
    // Decode the token without verifying to extract the role or type
    const decodedHeader = jwt.decode(token);

    // Determine which secret to use based on the role (user or organization)
    const secret =
      decodedHeader.role === "organization"
        ? process.env.JWT_SECRET_ORG
        : process.env.JWT_SECRET_USER;

    // Verify the token with the appropriate secret
    const decodedToken = await promisify(jwt.verify)(token, secret);

    // Use the correct model based on the role
    const userOrOrg =
      decodedHeader.role === "organization"
        ? await orgModel.findOne({ _id: decodedToken.id })
        : await userModel.findOne({ _id: decodedToken.id });
    // console.log("Fetched user/organization:", userOrOrg); // Log the fetched user/organization
    if (!userOrOrg) {
      return res.status(404).json({
        message: "User or Organization does not exist with this token",
      });
    }

    // Attach the user/organization to the request object
    req.userOrOrg = userOrOrg;
    next();
  } catch (error) {
    return res.status(400).json({
      message: "Invalid token",
    });
  }
};

module.exports = isAuthenticated;
