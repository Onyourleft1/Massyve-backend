const express = require("express");
const router = express.Router();
const controller = require("../controllers/User");

router.get("/get", controller.get);

module.exports = router;
