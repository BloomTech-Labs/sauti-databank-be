const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const graphqlHTTP = require("express-graphql");

const schema = require("./graphQL/schema");
const { getUsers, getSessions } = require("./graphQL/resolvers");

const server = express();

const root = {
  tradersUsers: getUsers,
  tradersData: getSessions
};

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
  })
);

module.exports = server;
