const User = require("../models/User");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const secretKey = process.env.JWT_SECRET;

module.exports = {
  get: async (req, res) => {
    const all = await User.find({});
    if (!all) {
      return res.status(403).json("Error in Findon Users");
    }
    return res.status(200).json(all);
  },
  create: async (req, res) => {
    const { name, username, email, password } = req.body;

    const existingUser = await User.findOne({
      email: email,
    });
    if (existingUser) {
      return res.status(401).json("User with this email already exists");
    }
    const user = await User.create({
      name: name,
      username: username,
      email: email,
      password: password,
    });
    if (!user) {
      return res.status(500).json("Error in creating new user");
    }
    return res.status(200).json("User created");
  },
  update: async (req, res) => {
    const { id, name, username, email, password } = req.body;
    const updateUser = await User.findByIdAndUpdate(id, {
      name: name,
      username: username,
      email: email,
      password: password,
    });
    if (!updateUser) {
      return res.status(500).json("Error in updating new user");
    }
    return res.status(200).json("User Updated");
  },
  delete: async (req, res) => {
    const { id } = req.params;

    const del = await User.findByIdAndDelete(id);
    if (!del) {
      return res.status(500).json("Error in deleting new user");
    }
    return res.status(200).json("User Deleted");
  },
  login: async (req, res) => {
    const { email, password } = req.body;
    const login = await User.findOne({
      email: email,
      password: password,
    });
    if (!login) {
      return res.status(404).json({ message: "Invalid Credentials" });
    }
    // const comp = await bcrypt.compare(password, login.password);
    // if (!comp) {
    // 	return res.status(404).json({ message: "Invalid Credentials" });
    // }
    const payload = {
      id: login.id,
    };

    const tkn = jwt.sign(payload, secretKey);
    res.cookie("token", tkn, {
      httpOnly: true, // Cookie accessible only by the web server
      secure: true, // Works in HTTPS environments
      sameSite: "Strict", // Restricts the cookie to be sent in same-site requests
      maxAge: 900000,
    });
    return res.status(200).json({ token: tkn });
  },
  getLoginInfo: async (req, res) => {
    const { token } = req.body;
    const verify = jwt.verify(token, secretKey);
    if (verify) {
      const loggedInUser = await User.findById(verify.id);
      if (!loggedInUser) {
        return res.status(404).json("User Info Not Found");
      }
      return res.status(200).json(loggedInUser);
    } else {
      return res.status(403).json("Error in verifying token");
    }
  },
  logout: async (req, res) => {
    res.clearCookie("token");
    res.status(200).json({ message: "You Logged Out" });
  },
};
