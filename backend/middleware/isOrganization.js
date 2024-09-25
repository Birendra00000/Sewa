const isOrganization = (...roles) => {
  return (req, res, next) => {
    const activeRole = req.userOrOrg?.role;
    console.log(activeRole);
    if (!roles.includes(activeRole)) {
      res.status(403).json({
        message: "You don't have permission for this",
      });
    } else {
      next();
    }
  };
};
module.exports = isOrganization;
