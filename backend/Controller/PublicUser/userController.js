const bcrypt = require("bcrypt");
const userModel = require("../../Model/PublicUser/userModel");

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

exports.userLogin = (req, res) => {
  try {
    console.log(req.body);
    const { email, password } = req.body;
  } catch (error) {}
};
