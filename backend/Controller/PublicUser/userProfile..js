const userModel = require("../../Model/PublicUser/userModel");

exports.userProfile = async (req, res) => {
    const userId = req.userOrOrg._id; // Get userId from the authenticated user  try {
    if (userId) {
      return res.status(400).json({
        message: "Userid is not defined",
      });
    }

    const userFind = await userModel.findById(userId);

    if (!userFind) {
      {
        return res.status.json({
          message: "User is not found",
        });
      }
    }

    res.status(200).json({
      userFind,
      messsage: "Successfully get profile data",
    });
  } catch (error) {
    console.error(err);
    res.sendStatus(400); // Internal server error
  }
};
