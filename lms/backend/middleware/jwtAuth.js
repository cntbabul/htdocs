const JWT = require("jsonwebtoken");

const jwtAuth = (req, res, next) => {
  const token = (req.cookies && req.cookies.token) || null;
  //   console.log(token);
  if (!token) {
    return res.status(400).json({
      success: false,
      message: "token does not exist",
    });
  }

  try {
    const payload = JWT.verify(token, process.env.JWT_SECRET);
    req.user = { id: payload.id, email: payload.email };
    // console.log(payload);
  } catch (e) {
    return res.status(400).json({
      success: false,
      message: e.message,
    });
  }

  next();
};

module.exports = jwtAuth;
