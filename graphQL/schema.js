const { gql } = require("apollo-server");

const typeDefs = gql`
  scalar Date

  type TraderUser {
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

  type databankUser {
    id: Int
    email: String
    password: String
    tier: String
    interest: String
    organization: String
    job_position: String
    country: String
    token: String
    organization_type: String
  }

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

  input newRegisterInput {
    id: Int
    email: String!
    password: String!
    tier: String!
    interest: String
    organization: String
    job_position: String
    country: String
    organization_type: String
  }

  input newLoginInput {
    id: Int
    email: String!
    password: String!
    tier: String
    interest: String
    organization: String
    job_position: String
    country: String
    organization_type: String
  }

  type Query {
    tradersUsers(input: newTraderInput): [TraderUser]!
    sessionsData(input: newTraderSessionInput): [TraderSession]!
    databankUser: [databankUser]!
  }

  type Mutation {
    register(input: newRegisterInput!): databankUser!
    login(input: newLoginInput!): databankUser!
  }
`;

module.exports = typeDefs;
