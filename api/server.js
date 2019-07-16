const express = require("express");
const helmet = require("helmet");
const sessions = require("../routes/sessions-router")

const server = express();

// server.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });


server.use(helmet());
server.use(express.json());
server.use("/sessions", sessions);
server.use(cors());

server.get("/", (req, res) => {
  res.send("WE ARE UP!");
});

module.exports = server;