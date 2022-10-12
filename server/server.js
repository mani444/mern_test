const express = require("express");
require("dotenv").config({ path: "./.env" });
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors({
    origin: '*'
}));
  

const dbo = require("./db/conn");
const login = require("./routes/login");

app.use("/login", login);

const PORT = process.env.PORT || 5000;
console.log(process.env.NODE_ENV);
// __dirname = path.resolve();
console.log("__dirname", __dirname);
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 3000;
app.listen(port, () => {
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
  });
  console.log(`Listening on port ${port}...`);
});

// Handling Error
// process.on("unhandledRejection", (err) => {
//   console.log(`An error occurred: ${err.message}`);
//   app.close(() => process.exit(1));
// });
