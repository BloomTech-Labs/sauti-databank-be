const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const graphqlHTTP = require("express-graphql");

// ROUTES
const sessions = require("../routes/sessions-router");
const users = require("../routes/users-router");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

///////////////////// GRAPHQL

const schema = require("../graphQL/schema");
const { getUsers, getSessions } = require("../graphQL/queries");

const root = {
     tradersUsers: getUsers,
     tradersData: getSessions
}

server.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
  })
);

///////////////////////////

// Tab 1
server.use("/sessions", sessions);
server.use("/users", users);

server.get("/", (req, res) => {
  res.status(200).send("FFT WAS HERE!!!");
});

module.exports = server;
