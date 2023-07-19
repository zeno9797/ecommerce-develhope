const users = require("./data.json");
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const filterUser = users.filter((user) => {
    return user.username === username && user.password === password;
  });
  if (filterUser.length > 0) {
    res.status(200).send({ message: "Benvenuto su Game Store!" });
  } else {
    res.status(401).send({ error: "Non sei autorizzato." });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
