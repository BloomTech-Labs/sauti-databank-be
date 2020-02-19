require("dotenv").config();
const helmet = require("helmet");
const { ApolloServer } = require("apollo-server")
const cors = require("cors");
const typeDefs = require("./graphQL/schema");
const resolvers = require("./graphQL/resolvers");
const port = process.env.PORT || 2500;
const model = require("./models/model")

const corsOptions = {
  origin: "*",
  methods: ["GET", "OPTIONS"],
  allowedHeaders: ['Content-Type', 'Authorization', 'Content-Length', 'X-Requested-With', 'Accept'],
};

const server = new ApolloServer({
  corsOptions,
  helmet,
  typeDefs,
  resolvers,
  context(){
    return model
  }
})

server.listen(port).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
})

