const Product = require("../models/Product");

module.exports = {
  get: async (req, res) => {
    const all = await Product.find({});
    if (!all) {
      return res.status(403).json("Error in Finding Products");
    }
    return res.status(200).json(all);
  },
  create: async (req, res) => {
    const { name, price, description } = req.body;
    const newProduct = await Product.create({
      name: name,
      price: price,
      description: description,
    });
    if (!newProduct) {
      return res.status(403).json("Error in Creating Product");
    }
    return res.status(200).json("Product Created");
  },
  update: async (req, res) => {
    const { id, name, price, description } = req.body;
    const newProduct = await Product.findByIdAndUpdate(id, {
      name: name,
      price: price,
      description: description,
    });
    if (!newProduct) {
      return res.status(403).json("Error in Updating Product");
    }
    return res.status(200).json("Product Updated");
  },
  delete: async (req, res) => {
    const { id } = req.params;
    const newProduct = await Product.findByIdAndDelete(id);
    if (!newProduct) {
      return res.status(403).json("Error in deleting Product");
    }
    return res.status(200).json("Product deleted");
  },
};
