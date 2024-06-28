const JWT = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    // const authHeader = req.header("Authorization");
    // console.log(`authHeader: ${authHeader}`); // authHeader);

    const token = req.header("Authorization").split(" ")[1];
    // console.log(token);
    JWT.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        return res.status(200).send({
          message: "Auth Failed",
          success: false,
        });
      } else {
        req.body.userId = decode.id;
        next();
      }
    });
    // console.log(`req.body.userId: ${req.body.userId}`); //req.body.userId);
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      message: "Auth Failed 2",
    });
  }
};
