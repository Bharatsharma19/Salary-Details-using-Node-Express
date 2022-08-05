var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
  res.render("employee");
});

router.get("/salary", function (req, res) {
  res.render("salary", { month: "August" });
});

module.exports = router;
