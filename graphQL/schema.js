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
  }

  # input newUserRegisterInput {
  #   id: Int
  #   email: String!
  #   password: String!
  #   tier: String!
  #   interest: String
  #   organization: String
  #   job_position: String
  #   country: String
  # }

  # input NewTradersUsersInput {
  #     id: Int
  #     gender: String
  #     age: String
  #     education: String
  #     crossing_freq: String
  #     produce: String
  #     primary_income: String
  #     language: String
  #     country_of_residence: String
  #   }

  # input newSessionsDataInput {
  #     id: Int
  #     gender: String
  #     age: String
  #     education: String
  #     crossing_freq: String
  #     produce: String
  #     primary_income: String
  #     language: String
  #     country_of_residence: String
  #     procedurecommodity: String
  #     procedurecommoditycat: String
  #     proceduredest: String
  #     procedurerequireddocument: String
  #     procedurerelevantagency: String
  #     procedureorigin: String
  #     commoditycountry: String
  #     commoditymarket: String
  #     commoditycat: String
  #     commodityproduct: String
  #     exchangedirection: String
  #     created_date: Date

  type Query {
    tradersUsers(
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
    ): [TraderUser]

    sessionsData(
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
    ): [TraderSession]

    databankUser: [databankUser]
  }

  type Mutation {
    register(
      id: Int
      email: String!
      password: String!
      tier: String!
      interest: String
      organization: String
      job_position: String
      country: String
    ): databankUser!

    login(
      id: Int
      email: String!
      password: String!
      tier: String
      interest: String
      organization: String
      job_position: String
      country: String
    ): databankUser!
  }
`;

module.exports = typeDefs;
