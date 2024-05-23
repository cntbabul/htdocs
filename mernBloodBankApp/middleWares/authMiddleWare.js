const JWT = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    // const authHeader = req.headers["authorization"];
    // // console.log(authHeader)
    //get the token from the authorization header
    const token = req.headers["authorization"].split(" ")[1];

    //if no token is found, return 401 unauthorized
    if (!token) {
      return res.status(401).send({
        success: false,
        message: "Auth Failed: Invalid format"
      });
    }
  
    //verify the token
    JWT.verify(token, process.env.JWT_SECRET, (err, decode) => {
      //if there is an error, return 401 unauthorized
      if (err) {
        return res.status(401).send({
          success: false,
          message: "Auth Failed",
        });
      } else {
        //decode the token and extract the userId
        req.body.userId = decode.userId;
        //call the next middleware
        next();
      }
    });
  
  } catch (error) {
    console.log(error);
    return res.status(401).send({
      success: false,
      error,
      message: "Auth Failed",
    });
  }
};
