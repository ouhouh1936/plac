const express = require("express");
const checkLogion = require("../middlewares/checkLogin");
const router = express.Router();
const db = require("../db");

router.get("/", checkLogion, (req, res, next) => {
  const loggedIn = req.session.isLoggedIn;

  res.render("screens/main", { loggedIn });
});
router.get("/signup", checkLogion, (req, res, next) => {
  const loggedIn = req.session.isLoggedIn;
  res.render("screens/signup", { loggedIn });
});
router.post("/signup", (req, res, next) => {
  const insertQuery = `
    INSERT INTO users (
      userId,
      password,
      name,
      mobile,
      createdAt,
      updatedAt
    ) VALUES (
      "${req.body.input_email}",
      "${req.body.input_password}",
      "${req.body.input_name}",
      "${req.body.input_mobile}",
      now(),
      now()
    )
  `;

  try {
    db.query(insertQuery, (err, rows) => {
      if (err) {
        return console.log(err);
      }

      if (!err) {
        return res.redirect("/");
      }
    });
  } catch (error) {
    console.error(error);
    return res.status(400).send("회원가입에 실패했습니다.");
  }
});
router.get("/signin", checkLogion, (req, res, next) => {
  const loggedIn = req.session.isLoggedIn;
  res.render("screens/signin", { loggedIn });
});

module.exports = router;
