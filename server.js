const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
require("dotenv").config();

const UsersRoute = require("./routes/User");
const ProductRoute = require("./routes/Product");

const app = express();
app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:8080",
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
dotenv.config();

app.use("/Users", UsersRoute);
app.use("/Products", ProductRoute);

const uri =
  "mongodb+srv://fadiajami82:CWtrfRiRsjHAt4ZT@massyve.cakimd5.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Massyve";

mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected To DB");
  })
  .catch((err) => {
    console.log("connection failed");
  });

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
