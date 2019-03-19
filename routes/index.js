const express = require("express");
const router = express.Router();
const shortenerRoutes = require("./shortenerRoutes");

router.get("/", (req, res) => {
  res.render("index.html");
});

router.use("/api/shortener", shortenerRoutes);

router.get("/:code", (req, res) => {
  res.redirect(`/api/shortener/${req.params.code}`);
});

module.exports = router;
