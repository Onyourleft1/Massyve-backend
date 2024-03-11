const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter user name"],
    },
    username: {
      type: String,
      required: [true, "Please enter user username"],
    },
    email: {
      type: String,
      required: [true, "Please enter user email"],
    },
    password: {
      type: String,
      required: [true, "Please enter user password"],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", schema);

module.exports = User;
