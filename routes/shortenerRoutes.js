const express = require("express");
const router = express.Router();
const shortenerController = require("../controllers/shortenerController");
const checkUrl = require("../middlewares/checkUrl");

router.get("/:code", shortenerController.redirectToUrl);

router.post("/", checkUrl, shortenerController.create);

module.exports = router;
