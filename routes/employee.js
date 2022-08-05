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
  let onlyMonthandYear = month[date.getMonth()] + " - " + date.getFullYear();

  let name = req.query.name;
  let grade = req.query.grade;
  let salary = parseFloat(req.query.salary);
  let da = 0;
  let hra = 0;

  if (grade === "Grade I") {
    da = 16;
    hra = 12;
  } else if (grade === "Grade II") {
    da = 22;
    hra = 16;
  } else if (grade === "Grade III") {
    da = 28;
    hra = 24;
  } else {
    da = 0;
    hra = 0;
  }
  let basesalary = salary;
  let daamount = (da * basesalary) / 100;
  let hraamount = (hra * basesalary) / 100;
  let netSalary = basesalary + daamount + hraamount;

  res.render("salary", {
    monthAndYear: onlyMonthandYear,
    name: name,
    grade: grade,
    basesalary: basesalary,
    daamount: daamount,
    hraamount: hraamount,
    netSalary: netSalary,
    da: da,
    hra: hra,
  });
});

module.exports = router;
