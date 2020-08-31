const express = require("express");
const cookbook = require("./cookbook/cookbook-router");

const server = express();
const port = 5000;

server.use(express.json());
server.use("/", cookbook);

server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ message: "Something went wrong" });
});

server.listen(port, () => {
  console.log(`Running on server http://localhost:${port}`);
});
