const mongoose = require("mongoose");

const connectToDb = async () => {
    mongoose.connect();
}



module.exports = connectToDb;