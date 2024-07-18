const mongoose = require("mongoose");

const MONGODB_URL =
  process.env.MONGODB_URL ||
  "mongodb+srv://babul:123@cluster0.i1wta2y.mongodb.net/";

const databaseConnect = async () => {
  mongoose
    .connect(MONGODB_URL)
    .then((conn) => console.log(`database connected ${conn.connection.host}`))
    .catch((err) => console.log(err.message));
};

module.exports = databaseConnect;
