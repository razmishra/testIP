const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.json({ msg: "Here is your public ip address ", ip: req.ip });
});

app.listen(8080, () => {
  console.log("listening on port 8080");
});
