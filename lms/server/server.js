import connectionToDB from "./config/db.js";

import app from "./app.js";
// import dotenv from("dotenv");

const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  await connectionToDB();
  console.log(`Server running on port ${PORT}`);
});
