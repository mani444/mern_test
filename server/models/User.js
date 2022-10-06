const mongoose = require("mongoose");

// create an schema
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const Users = mongoose.model("users", userSchema);

module.exports = { Users };
