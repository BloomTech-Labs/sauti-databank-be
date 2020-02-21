require("dotenv").config();
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const helmet = require("helmet");
const typeDefs = require("./graphQL/schema");
const resolvers = require("./graphQL/resolvers");
const Traders = require("./models/model");
const Users = require("./models/databankUsers");
const cors = require("cors");

const server = new ApolloServer({
  helmet,
  typeDefs,
  resolvers,
  context() {
    return { Traders, Users };
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

app.use(express.json());
app.use(cors(corsOptions));

server.applyMiddleware({
  app,
  path: "/graphql",
  cors: false // disabling the apollo-server-express cors to allow the cors middleware use
});

app.use(function notFound(req, res, next) {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use(function catchUnhandledPromiseRejections(error, req, res, next) {
  if (error instanceof Promise) {
    error.catch(err => {
      next(error);
    });
  } else {
    next(error);
  }
});

app.use(function catchAll(error, req, res, next) {
  error.status = error.status || 500;
  error.message = error.message || "Internal server error";

  console.error(error);

  res.status(error.status).json({
    error: {
      message: error.message,
      status: error.status
    }
  });
});

module.exports = app;
