const checkLogion = (req, res, next) => {
  // 사용자가 로그인 했어?
  req.session.isLoggedIn = false;

  next();
};

module.exports = checkLogion;
