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
    return res.status(403).json({ message: "Please provide a token" });
  }

  // Extract the token from the header
  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(400).json({ message: "Token is missing" });
  }

  let decodedToken;

  try {
    // First, attempt verification with the user secret
    decodedToken = await promisify(jwt.verify)(
      token,
      process.env.JWT_SECRET_USER
    );
    // console.log("Decoded as Public User:", decodedToken);

    // Fetch the user from the database
    const user = await userModel.findOne({ _id: decodedToken.id });
    if (!user) {
      throw new Error("User not found");
    }

    req.userOrOrg = user;
    return next();
  } catch (userError) {
    console.log("User token verification failed:", userError.message);
  }

  try {
    // If user verification fails, attempt verification with the organization secret
    decodedToken = await promisify(jwt.verify)(
      token,
      process.env.JWT_SECRET_ORG
    );
    // console.log("Decoded as Organization:", decodedToken);

    // Fetch the organization from the database
    const org = await orgModel.findOne({ _id: decodedToken.id });
    if (!org) {
      throw new Error("Organization not found");
    }

    req.userOrOrg = org;
    return next();
  } catch (orgError) {
    console.log("Organization token verification failed:", orgError.message);
  }

  // If neither verification succeeds, return an error
  return res.status(400).json({ message: "Invalid token" });
};

module.exports = isAuthenticated;
