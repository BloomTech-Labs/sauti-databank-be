## Project Breakdown
---
## GraphQL 

GraphQL is a API that differs from REST APIs because it uses a schema which tells what can be returned from the database, and only returns what is requested in the query. GraphQl also differs because it only exposes a single API endpoint from where all of the data can be retrieved. Our application uses the Apollo library to send queries to the back end from React. To test GraphQl, start the server on the local host and visit the `/graphql` endpoint in your browser.

## Schemas & Queries

See back end documentation [here](https://github.com/Lambda-School-Labs/sauti-databank-be/blob/master/README.md).

## Resolvers

Originally this was built as a REST API, which used Knex resolvers. They work with GraphQL, but moving forward, standard practice would be to use a GraphQL resolver package such as [Prisma](https://www.prisma.io/).

## sessionsDataParser.js

This file takes the data that we get from the stakeholder, which is in a serialized string and isn't usable in a relational database, and turns it into data we can use by storing it back into the database in rows and columns. 

### Issues:

Currently when the data is being retrieved some of the genders are in another language and therefore are being left out when we return the parsed data back into the table. For instance the Gender `Kiume` is being left out of the data sample. To fix this add some code to sessionsDataParser.js that catches other language items and converts them into the English equivalents.


## Heroku Scheduler

The data doesn't automatically refresh. It refreshes every 24 hours because we set up Heroku Scheduler to run sessionsDataParser.js every 24 hours. If the account is a free account, the scheduler runs on limited dynos which will sleep after 30 minutes. To get around this, any paid account will run on dynos that will not sleep and therefore will work as intended and run every 24 hours. We only have one diployment that is running the scheduler, it is on the Lambda official account so it does not fall asleep. Have your TL get in touch with Lambda to access that account.
