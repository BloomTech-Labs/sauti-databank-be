require("dotenv").config();
const express = require('express');
const { ApolloServer } = require("apollo-server-express")
const helmet = require("helmet");
const typeDefs = require("./graphQL/schema");
const resolvers = require("./graphQL/resolvers");
const port = process.env.PORT || 2500;
const model = require("./models/model")
const cors = require('cors');


const server = new ApolloServer({
  helmet,
  typeDefs,
  resolvers,
  context(){
    return model
  }
});

const app = express();

const corsOptions = {
  origin: "https://sauti.now.sh/",
  methods: ["GET", "OPTIONS"],
  allowedHeaders: ['Content-Type', 'Authorization', 'Content-Length', 'X-Requested-With', 'Accept'],
};

app.use(cors(corsOptions));

server.applyMiddleware({
  app,
  cors: false, // disabling the apollo-server-express cors to allow the cors middleware use
})

app.listen(port), () => {
  console.log(`🚀 Server ready at ${port}`);
}


