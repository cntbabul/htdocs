const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/about", (req, res) => res.send(" <h1>About Page</h1>"));

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
