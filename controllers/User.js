module.exports = {
  get: async (req, res) => {
    return res.status(200).json("Hello");
  },
  create: async (req, res) => {
    return res.status(200).json(test);
  },
};
