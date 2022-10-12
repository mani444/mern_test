const express = require("express");

const loginRouter = express.Router();

const { Users } = require("../models/User");
// loginRouter.post("/", (req, res) => {
loginRouter.route("/").post(async (req, res, next) => {
  console.log("req.body",req.body);
  const { email, password } = req.body;
  // const email = "amjad@desolint.com";
  // const password = "123456abc";

  try {
    const user = await Users.findOne({ email, password });
    console.log("user",user);
    if (!user) {
      console.log("user not",user);
      res.status(401).json({
        message: "Login not successful",
        error: "User not found",
      });
    } else {
      console.log("user found",user);
      res.status(200).json({
        message: "Login successful",
        user,
      });
    }
  } catch (error) {
    console.log("user error",error);
    res.status(400).json({
      message: "An error occurred",
      error: error.message,
    });
  }
});
module.exports = loginRouter;
