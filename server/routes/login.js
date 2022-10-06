const app = require("express");
const loginRouter = app.Router();

const { Users } = require("../models/User");
loginRouter.route("/").post(async (req, res, next) => {
  //   const { email, password } = req.body;
  const email = "amjad@desolint.com";
  const password = "123456abc";
  console.log("req.body", email);

  try {
    const user = await Users.findOne({ email, password });
    if (!user) {
      res.status(401).json({
        message: "Login not successful",
        error: "User not found",
      });
    } else {
      res.status(200).json({
        message: "Login successful",
        user,
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "An error occurred",
      error: error.message,
    });
  }
});
module.exports = loginRouter;
