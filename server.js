require("dotenv").config();
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const helmet = require("helmet");
const typeDefs = require("./graphQL/schema");
const resolvers = require("./graphQL/resolvers");
const model = require("./models/model");
const cors = require("cors");

const server = new ApolloServer({
  helmet,
  typeDefs,
  resolvers,
  context() {
    return model;
  },
  introspection: true,
  playground: true
});

const app = express();

const corsOptions = {
  // switch to https://sauti.now.sh/ when ready for lance
  origin: "*",
  methods: ["GET", "OPTIONS", "POST"],
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "Content-Length",
    "X-Requested-With",
    "Accept"
  ]
};

app.get("/", function ping(req, res) {
  res.status(200).json({ api: "Running." });
});

app.use(cors(corsOptions));

server.applyMiddleware({
  app,
  path: "/graphql",
  cors: false // disabling the apollo-server-express cors to allow the cors middleware use
});

module.exports = app;
