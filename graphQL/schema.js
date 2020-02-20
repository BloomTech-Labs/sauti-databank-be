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
  #   }

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
  }
`;

module.exports = typeDefs;
