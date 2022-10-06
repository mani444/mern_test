const mongoose = require("mongoose");
const express = require("express");
require("dotenv").config({ path: "./.env" });
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5000;
console.log(process.env.NODE_ENV);
__dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
