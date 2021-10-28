const express = require("express");
const checkLogion = require("../middlewares/checkLogin");
const router = express.Router();

router.get("/", checkLogion, (req, res, next) => {
  const loggedIn = req.session.isLoggedIn;

  res.render("screens/main", { loggedIn });
});
router.get("/signup", checkLogion, (req, res, next) => {
  const loggedIn = req.session.isLoggedIn;
  res.render("screens/signup", { loggedIn });
});
router.get("/signin", checkLogion, (req, res, next) => {
  const loggedIn = req.session.isLoggedIn;
  res.render("screens/signin", { loggedIn });
});

module.exports = router;
