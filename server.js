require("dotenv").config();
const helmet = require("helmet");
const { ApolloServer } = require("apollo-server")
const typeDefs = require("./graphQL/schema");
const resolvers = require("./graphQL/resolvers");
const port = process.env.PORT || 2500;
const model = require("./models/model")



const server = new ApolloServer({

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


