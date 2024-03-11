const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
require("dotenv").config();

const UsersRoute = require("./routes/User");

const app = express();
app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
dotenv.config();
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});

app.use("/Users", UsersRoute);
