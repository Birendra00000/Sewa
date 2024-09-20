const bcrypt = require("bcrypt");
const userModel = require("../../Model/PublicUser/userModel");
var jwt = require("jsonwebtoken");

require("dotenv").config();

exports.userRegistration = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      contactNumber,
      email,
      password,
      participationType,
    } = req.body;
    console.log(req.body);
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !contactNumber ||
      !participationType
    ) {
      return res.status(400).json({
        message: "Pleased fill out the form",
      });
    }

    const emailExist = await userModel.findOne({
      userEmail: email.toLowerCase(),
    });

    if (emailExist) {
      return res.status(400).json({
        message: "Email already Exist",
      });
    }

    const hashPassword = await bcrypt.hash(req.body.password, 6);

    const newUser = await userModel.create({
      firstName: firstName,
      lastName: lastName,
      email: email.toLowerCase(),
      password: hashPassword,
      contactNumber,
      participationType: participationType,
    });

    res.status(200).json({
      data: newUser,
      message: "Registered successfully",
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: "Error Filling form",
      error: error.message,
    });
  }
};

exports.userLogin = async (req, res) => {
  try {
    console.log(req.body);
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Pleased provide email and password",
      });
    }

    const userExist = await userModel.findOne({ email: email.toLowerCase() });

    if (!userExist) {
      return res.status(400).json({
        message: "User not found",
      });
    }
    console.log("User found all:", userExist);

    // Log the user object to verify the password field exists
    console.log("User found:", userExist?.password);

    // Check if the user has a password field
    if (!userExist.password) {
      return res.status(500).json({
        message: "User account has no password stored",
      });
    }

    const isPasswordvalid = await bcrypt.compare(password, userExist.password);
    if (!isPasswordvalid) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    //For Generating token

    const token = jwt.sign({ id: userExist._id }, process.env.JWT_SECRET_USER, {
      expiresIn: "7d",
    });

    res.status(200).json({
      userExist,
      message: "Log In successfully",
      token,
    });
  } catch (error) {
    console.error(error); // Log the error
    res.status(500).json({ message: "Internal Server Error" });
  }
};
