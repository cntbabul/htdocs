const app = require("./app");

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(" <h1>Hello World!</h1>");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
