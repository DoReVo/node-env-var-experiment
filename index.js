const express = require("express");
require("dotenv").config();
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const env = process.env.MSG || "Not Defined";
  const fileEnv = process.env.INSIDE_FILE || "NOT DEFINED";
  res.send(
    `Value for MSG env variable is ${env} \n while from file is ${fileEnv}`
  );
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
