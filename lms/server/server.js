import connectionToDB from "./config/db.js";
import cloudinary from "cloudinary";

import app from "./app.js";
// import dotenv from("dotenv");

const PORT = process.env.PORT || 5000;

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.listen(PORT, async () => {
  await connectionToDB();
  console.log(`Server running on port ${PORT}`);
});
