const express = require("express");
const helmet = require("helmet");
const sessions = require("../routes/sessions-router");
const users = require("../routes/users-router");
const cors = require("cors");
const infoDemand = require('../routes/infodemand-router');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/sessions", sessions);
server.use("/users", users);
server.use("/info", infoDemand);

server.get("/", (req, res) => {
  res.status(200).send("WE ARE UP!");
});

module.exports = server;