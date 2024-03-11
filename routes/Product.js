const express = require("express");
const router = express.Router();
const controller = require("../controllers/Product");

router.get("/get", controller.get);
router.post("/create", controller.create);
router.patch("/update", controller.update);
router.delete("/delete/:id", controller.delete);

module.exports = router;
