const orgSchema = require("../../Model/Organization/orgModel");
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

    const hashPassword = await bcrypt.hash(orgPassword, 6);

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
