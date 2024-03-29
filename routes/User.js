const express = require("express");
const router = express.Router();
const controller = require("../controllers/User");

router.get("/get", controller.get);
router.post("/create", controller.create);
router.patch("/update", controller.update);
router.delete("/delete/:id", controller.delete);
router.post("/login", controller.login);
router.post("/getLoginInfo", controller.getLoginInfo);
router.get("/logout", controller.logout);

module.exports = router;
