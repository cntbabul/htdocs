const testController = (req, res) => {
  res.status(200).send({
    message: "Welcome user with nodemon",
    success: true,
  });
};

module.exports = { testController };
