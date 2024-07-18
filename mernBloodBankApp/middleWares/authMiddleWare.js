const JWT = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    // const authHeader = req.headers["Authorization"];
    // const token = authHeader.split(" ")[1];
    const token = req.headers["authorization"].split(" ")[1];
    // console.log(`token ${token}`); //display token in console
    if (!token) {
      return res.status(401).send({
        success: false,
        message: "Auth Failed: Invalid format",
      });
    }

    JWT.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        return res.status(401).send({
          success: false,
          message: "Auth Failed",
        });
      } else {
        req.body.userId = decode.userId;
        next();
      }
    });
  } catch (error) {
    console.log(error);
    return res.status(401).send({
      success: false,
      error,
      message: "Auth Failedd",
    });
  }
};
