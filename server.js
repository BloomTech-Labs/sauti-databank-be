// const helloWorld = require("./helloWorld.js");
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const graphqlHTTP = require("express-graphql");
//candace code
const cron = require("node-cron");
const shell = require("shelljs");

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


//candace code
// cron.schedule("5 * * * *", function(){
//   console.log("scheduler is running")
//   if(shell.exec('node helloWorld'.code !== 0)){
//     shell.exit(1);
// console.log("something went wrong")
//   } else {
//     shell.echo("Database backup complete")
//   }
// })

let testNumber = 0;

const addOne = (num) => {
  let add = num + 1
  testNumber += 1
  console.log("the funct is running", add)
  return add
}

cron.schedule("* * * * *", function() {
  console.log("schedular is running")
  addOne(testNumber)
})

module.exports = server;
