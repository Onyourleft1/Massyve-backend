const express = require("express");
const router = express.Router();
const controller = require("../controllers/User");

router.get("/get", controller.get);
router.get("/create", controller.create);

module.exports = router;
