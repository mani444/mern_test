const mongoose = require("mongoose");
const db = process.env.ATLAS_URI;
module.exports = {
  connectToServer: function (callback) {
    mongoose
      .connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Successfully connected to Mongoose.");
      })
      .catch((err) => {
        console.error("Not connected to Mongoose", err);
      });
  },
};
