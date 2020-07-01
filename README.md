# API Documentation

#### Backend deployed on [Heroku](https://sauti-databank.herokuapp.com/). <br>

## Getting started

To get the server running locally:

- Clone this repo, then, cd into the repo in Terminal and:
- **npm install** to install all required dependencies.
- **npm run server** to start the local server.
- **update .env** store SQL server connection info there.

### Backend framework

We built our backend, using Node, Express, GraphQL, and Knex to work with a MySQL database.

- [Node](https://nodejs.org/en/): We all learned Node.js, and since we were taking on a lot of new libraries in this project, learning MySQL, Apollo-Server, Nivo, and more, we decided Node.js would meet our needs for building our API and free us up to learn new tools. We also see potential for realtime data updating in the future, and know Node is particularly useful in those applications.
- [Apollo-Server-Express](https://github.com/apollographql/apollo-server/tree/master/packages/apollo-server-express): We added a bit more usability to Node for our project using Express, a web application framework that lets us build a bit more rapidly.
- [Knex](http://knexjs.org/): We used Knex to help us more efficiently build our queries.
- [GraphQL](https://graphql.org/): We used GraphQL as a server to the database to assert specific data points through queries which allow fetching a lot of data in a single request to a single API endpoint.
- [MySQL](https://www.mysql.com/): Sauti has a lot of data to work with: over 11k users and 115k sessions. In order to best meet their needs and visualize their data, we used their existing and preferred MySQL database to eliminate migration issues and complexity.
 
### GraphQL Route

**Endpoint:** `https://sauti-databank.herokuapp.com/graphql`

**Description:** It is necessary to understand that all of the data depicted on the deployed site is being retrieved through one single API endpoint. Through our usage of the GraphQL framework, we are able to send our database specific queries that retrieve appropriated data through this endpoint. The deployed URL is hidden behind an environment variable accessible to participants of this project. 

## Schemas

GraphQL acts as a server to the existing database. GraphQL requires a schema to describe the shape of the data graph. The schema types are what populate from the stored backend data.
We used schemas types that organize the requests needed to retrieve specific data from the existing database.

## Queries

Queries are interactive, changable requests. Queries can traverse related objects and their fields which allows fetching a lot of data in a single request. The Query structure similarly reflect the GraphQL schema structure, and the results are based on what is indicated in the schema.

## Schema Types
 ``` 
    scalar Date

   type TraderUser {
    id: Int
    gender: String
    age: String
    education: String
    crossing_freq: String
    crossing_location: String
    produce: String
    primary_income: String
    language: String
    country_of_residence: String
  }

  type TraderSession {
    id: Int
    gender: String
    age: String
    education: String
    crossing_freq: String
    produce: String
    primary_income: String
    language: String
    country_of_residence: String
    procedurecommodity: String
    procedurecommoditycat: String
    proceduredest: String
    procedurerequireddocument: String
    procedurerelevantagency: String
    procedureorigin: String
    commoditycountry: String
    commoditymarket: String
    commoditycat: String
    commodityproduct: String
    exchangedirection: String
    created_date: Date
  }

  type DatabankUser {
    id: Int
    email: String
    password: String
    tier: UserTier
    interest: String
    organization: String
    job_position: String
    country: String
    token: String
    organization_type: OrganizationType
    subscription_id: String
    registration_date: String
    updated: String
    p_next_billing_time: String
    found_by: FoundBy
    paypal_plan: String
  }

  enum FoundBy {
    CROSS_BORDER_ASSOCIATION
    UNIVERSITY
    SAUTI_STAFF
    OTHER
  }

  enum UserTier {
    FREE
    PAID
    ADMIN
    GOV_ROLE
  }

  enum OrganizationType {
    GOVERNMENT
    NGO
    RESEARCH
    OTHER
  }

  type Error {
    message: String
  }

  union EditedUserOrError = DatabankUser | Error
  union DeletedUserOrError = DatabankUser | Error
  union UpdateUserToFree = DatabankUser | Error
  union AddPaypalPlanOrError = DatabankUser | Error

  input newTraderInput {
    id: Int
    gender: String
    age: String
    education: String
    crossing_freq: String
    produce: String
    primary_income: String
    language: String
    country_of_residence: String
  }

  input newTraderSessionInput {
    id: Int
    gender: String
    age: String
    education: String
    crossing_freq: String
    produce: String
    primary_income: String
    language: String
    country_of_residence: String
    procedurecommodity: String
    procedurecommoditycat: String
    proceduredest: String
    procedurerequireddocument: String
    procedurerelevantagency: String
    procedureorigin: String
    commoditycountry: String
    commoditymarket: String
    commoditycat: String
    commodityproduct: String
    exchangedirection: String
    created_date: Date
  }

  input newEditUserInput {
    id: Int!
    email: String
    password: String
    tier: UserTier
    interest: String
    organization: String
    job_position: String
    country: String
    organization_type: OrganizationType
    subscription_id: String
  }

  input newUpdateUserToFreeInput {
    id: Int
    email: String!
    subscription_id: String
  }

  input newAddPaypalPlanInput {
    id: Int
    email: String!
    subscription_id: String
  }

  input newDeleteUserInput {
    id: Int!
    email: String
  }

  input newRegisterInput {
    id: Int
    email: String!
    password: String!
    tier: UserTier!
    interest: String
    organization: String
    job_position: String
    country: String
    organization_type: OrganizationType!
    found_by: FoundBy
  }

  input newLoginInput {
    email: String!
    password: String!
  }

  input Email {
    email: String
  }

  type Query {
    tradersUsers(input: newTraderInput): [TraderUser]!
    sessionsData(input: newTraderSessionInput): [TraderSession]!
    databankUsers: [DatabankUser]!
    databankUser(input: Email!): DatabankUser!
  }

  type Mutation {
    register(input: newRegisterInput!): DatabankUser!
    login(input: newLoginInput!): DatabankUser!
    editUser(input: newEditUserInput!): EditedUserOrError!
    deleteUser(input: newDeleteUserInput!): DeletedUserOrError!
    updateUserToFree(input: newUpdateUserToFreeInput!): UpdateUserToFree!
    addPaypalPlan(input: newAddPaypalPlanInput!): AddPaypalPlanOrError!
  }
;
```

## Database Schema

#### platform_sessions2

```
{
  sess_id: int(10) PK
  cell_num: varchar(25)
  created_date: datetime
  udate: timestamp
  data: text
  platform_id: int(2)
  notes: varchar(400)
}
```


#### traders

```
{
  id: UUID PK
  cell_num: varchar(25)
  gender: varchar(45)
  age: varchar(45)
  education: varchar(45)
  crossing_freq: varchar(45)
  produce: varchar(45)
  primary_income: varchar(45)
  language: varchar(45)
  country_of_residence: varchar(45)
}
```

#### parsed_data

```

{
  id: int(128) PK 
  platform_sessions_id: int(128)
  procedurecommodity: text
  procedurecommoditycat: text
  proceduredest: text
  procedurerequireddocument: text
  procedurerelevantagency: text
  procedureorigin: text
  commoditycountry: text
  commoditymarket: text
  commoditycat: text
  commodityproduct: text
  exchangedirection: text
  created_date: datetime
}

```

### Data parsers:

- The file `tradersDataParser.js` in the `models` folder has the script that cleans the data from platform_sessions2 table and populates the trader demographic info in the traders table every 24 hours.

- The file `sessionsDataParser.js` in the `models` folder has the script that cleans the data from platform_sessions2 table and populates the trader's sessions info in the `parsed_data` table every 24 hours. 

- The file `seperateMultiples.js` in the `models` folder is a function that cleans the data returned from the sessions table and breaks down the sessions into objects based on how many searches were perfomed in a session so that there is no more than one search for each catagory in a session. This presents the user with addtional objects as well as more accurate data.

- The file `dictionary.js` in the `models` folder contians 4 objects an object called "products" that includes all possible products, an object called object called "categories" that includes all possible categories, an object called `procedureComm` that correct several different spellings of various proceedure commodities, and an object called `markets` that corrects several different spellings of various markets.

- The file `dictionaryParcer.js` in the `models` folder is a function that takes in the cleaned data and compares it to the dictionary in `dictionary.js` to remove several issues that caused duplicate or confusing data to return. Only values that exist in the dictionary can be returned as products or product categories, new addtions will have to be added to dictionary.js before they can be seen on the app. Markets that do not exist in the dictionary can be added so that the list can expand. The word "Market" is always removed from the entry to avoid duplicates. New Peoceedure Commodities can be added but several spelling errors are corrected. The presentation is also made more uniform (i.e. "Fresh Talapia" to "Talapia - Fresh")

## Environment Variables

In order for the app to function correctly, the user must set up the proper environment variables on their local machines. 

To populate an .env file with appropriate variables, reach out to Sauti for access for the following:

- username
- password
- database 
- host
- deployed URL 
- PAYPAL_AUTH_USERNAME
- PAYPAL_AUTH_SECRET

#### Accessing Gender

- Returns all Sauti Databank users that answered a gender survey along with recorded gender.
- Returns the number of users who marked female in a gender survey.
- Returns the number of users who marked male in a gender survey.

#### Accessing border crossing frequency data

- Returns all Sauti Databank users that recorded a border crossing frequency.
- Returns the number of users who report crossing a border weekly.
- Returns the number of users who report crossing a border monthly.
- Returns the number of users who report never crossing a border.
- Returns the number of users who report crossing a border daily.

#### Accessing education data

- Returns all users who reported any education history.
- Returns a count of all users who reported primary as their highest level of education.
- Returns a count of all users who reported secondary as their highest level of education.
- Returns a count of all users who reported university as their highest level of education.
- Returns a count of all users who reported they had no education.

#### Accessing language data

- Returns all Sauti Databank users that reported a language.
- Returns the number of Sauti Databank users who reported English as their language.
- Returns the number of Sauti Databank users who reported Swahili as their language.
- Returns the number of Sauti Databank users who reported Kinyarwanda as their language.
- Returns the number of Sauti Databank users who reported Luganda as their language.
- Returns the number of Sauti Databank users who reported Lukiga as their language.

#### Accessing country of residence data

- Returns all Sauti Databank users that reported a country of residence.
- Returns the number of Sauti Databank users who reported Kenya as their country of residence.
- Returns the number of Sauti Databank users who reported Uganda as their country of residence.
- Returns the number of Sauti Databank users who reported Rwanda as their country of residence.

#### Accessing age data

- Returns all Sauti Databank users that reported an age demographic.
- Returns the number of Sauti Databank users who reported an age between 10-20 years.
- Returns the number of Sauti Databank users who reported an age between 20-30 years.
- Returns the number of Sauti Databank users who reported an age between 30-40 years.
- Returns the number of Sauti Databank users who reported an age between 40-50 years.
- Returns the number of Sauti Databank users who reported an age between 50-60 years.
- Returns the number of Sauti Databank users who reported an age between 60-70 years.

#### Accessing primary income data

- Returns all Sauti Databank users that reported an answer to the primary income question.
- Returns the number of Sauti Databank users who reported small border trade as a primary
  source of income.
- Returns the number of Sauti Databank users who reported small border trade was not their
  primary source of income.

#### Accessing produce data

- Returns all Sauti Databank users that reported an answer to the produce question.
- Returns the number of Sauti Databank users who reported trading produce at the border.
- Returns the number of Sauti Databank users who reported that they do not trade produce at the border.

#### Accessing Procedures for Commodity Categories data

- Returns the most requested procedures for commodity categories.

#### Accessing Most Requested Document Information for Procedures data

- Returns the most requested document information for procedures.

#### Accessing Most Requested Agency Information for Procedures data

- Returns the most requested agency information for procedures.

#### Accessing Most Requested Procedures for Commodities data

- Returns the most requested procedures for commodities.

#### Accessing Requested Procedures for Destination (Imports to:) data

- Returns the requested procedures for destination.

#### Accessing Final Destination Country data

- Returns the final destination country.

#### Accessing Final Destination Markert data

- Returns the final destination market.

#### Accessing Exchange Direction data

- Returns the exchange direction.

#### Accessing Top Commodity Categories data

- Returns the top commodity categories.

#### Accessing Top Commodities data

- Returns the top commodities.

#### Accessing Origin of Traders' Goods data

- Returns origin of traders' goods.

## Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

### Issue/Bug Request

**If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**

- Check first to see if your issue has already been reported.
- Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
- Create a live example of the problem.
- Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

See [Frontend Documentation](https://github.com/Lambda-School-Labs/sauti-databank-fe/blob/master/README.md) for details on the frontend of our project.

[![Maintainability](https://api.codeclimate.com/v1/badges/ada6b5b5e303d199d699/maintainability)](https://codeclimate.com/github/Lambda-School-Labs/sauti-databank-be/maintainability)
