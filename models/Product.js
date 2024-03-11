const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter product name"],
    },
    price: {
      type: Number,
      required: [true, "Please enter Price"],
    },
    description: {
      type: String,
      required: [true, "Please enter product description"],
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", schema);

module.exports = Product;
