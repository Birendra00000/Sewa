const jwt = require("jsonwebtoken");
const userModel = require("../Model/PublicUser/userModel");
const promisify = require("util").promisify;

const isAuthenticated = async (req, res, next) => {
  // Extract the token from the 'Authorization' header
  const authHeader = req.headers.authorization;
  // Check if the token exists
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(403).json({
      message: "Please provide a token",
    });
  }

  // Extract the token from the header
  const token = authHeader.split(" ")[1];

  try {
    // Verify the token
    const decodeToken = await promisify(jwt.verify)(
      token,
      process.env.JWT_SECRET // Make sure this matches the secret used for signing tokens
    );

    // Find the user associated with the token
    const user = await userModel.findOne({ _id: decodeToken.id });

    if (!user) {
      return res.status(404).json({
        message: "User does not exist with this token",
      });
    }

    // Attach the user to the request object
    req.user = user;
    next();
  } catch (error) {
    return res.status(400).json({
      message: "Invalid token",
    });
  }
};

module.exports = isAuthenticated;
