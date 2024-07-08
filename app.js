const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const setUpAndStartServer = async () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.get("/api", (req, res) => {
    console.log("route hit");
    res.json({ message: "hello from this side" });
  });

  app.listen(3000, () => {
    console.log(`Server is listening on 3000`);
  });
};

setUpAndStartServer();
