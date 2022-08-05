let express = require("express");
let router = express.Router();

router.get("/", function (req, res) {
  res.render("employee");
});

router.get("/salary", function (req, res) {
  let date = new Date();

  let month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let onlyMonth = month[date.getMonth()];

  res.render("salary", { month: onlyMonth });
});

module.exports = router;
