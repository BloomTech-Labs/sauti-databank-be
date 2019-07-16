const express = require("express");
const helmet = require("helmet");
const sessions = require("../routes/sessions-router")

const server = express();


server.use(helmet());
server.use(express.json());
server.use("/sessions", sessions);

server.get("/", (req, res) => {
  res.send("WE ARE UP!");
});

module.exports = server;