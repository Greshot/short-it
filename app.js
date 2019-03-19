require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");
const path = require("path");

let port = process.env.PORT || 8080;

app.use(express.json());

mongoose
  .connect(process.env.DB_URI)
  .then(() => console.log("Connected to db!"))
  .catch(err => console.log("Error on db connection: ", err));

app.use(express.static(path.join(__dirname, "views")));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", routes);

app.listen(port, () => {
  console.log(`Url shortener running on port: ${port}`);
});
