const orgModel = require("../../Model/Organization/orgModel");
const orgSchema = require("../../Model/Organization/orgModel");
var jwt = require("jsonwebtoken");

const bcrypt = require("bcrypt");

exports.orgRegistartion = async (req, res) => {
  try {
    // console.log(req.body);
    const file = req.file;
    let imageUrl;

    if (file) {
      //Cloudinary upload already handled by multer
      imageUrl = file.path; //This is the Cloudinary URL
    } else {
      imageUrl = ""; //No image provided
    }

    const {
      orgName,
      orgDescription,
      orgEmail,
      orgContact,
      websiteUrl,
      orgPassword,
      orgAddress,
    } = req.body;
    if (
      !orgName ||
      !orgDescription ||
      !orgEmail ||
      !orgContact ||
      !websiteUrl ||
      !orgPassword ||
      !orgAddress
    ) {
      return res.status(400).json({
        message: "Missing required fields",
      });
    }

    const hashPassword = await bcrypt.hash(req.body.orgPassword, 6);

    //Create a new todo item with the image URL
    const orgRegistartion = await orgSchema.create({
      orgName,
      orgDescription,
      orgEmail,
      orgContact,
      websiteUrl,
      orgPassword: hashPassword,
      orgAddress,
      orgImage: imageUrl,
    });

    res.status(200).json({
      message: "Organization register successfully",
      data: orgRegistartion,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: "Error creating Event",
      error: error.message,
    });
  }
};
exports.orgLogin = async (req, res) => {
  try {
    console.log(req.body);
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Pleased provide email and password",
      });
    }

    const orgExist = await orgModel.findOne({ orgEmail: email.toLowerCase() });
    if (!orgExist) {
      return res.status(400).json({
        message: "Org not found",
      });
    }
    console.log("Org found all:", orgExist);

    // console.log("Org found all:", orgExist);

    // Log theorg object to verify the password field exists
    console.log("Org found:", orgExist?.orgPassword);

    // Check if theorg has a password field
    if (!orgExist.orgPassword) {
      return res.status(500).json({
        message: "Org account has no password stored",
      });
    }

    const isPasswordvalid = await bcrypt.compare(
      password,
      orgExist.orgPassword
    );
    if (!isPasswordvalid) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    //For Generating token

    const token = jwt.sign(
      { id: orgExist._id, role: orgExist.role },
      process.env.JWT_SECRET_ORG,
      {
        expiresIn: "7d",
      }
    );

    res.status(200).json({
      orgExist,
      message: "Log In successfully",
      token,
    });
  } catch (error) {
    console.error(error); // Log the error
    res.status(500).json({ message: "Internal Server Error" });
  }
};
