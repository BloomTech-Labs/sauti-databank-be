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
  }

  input newDeleteUserInput {
    id: Int!
    email: String
  }

  input newRegisterInput {
    id: Int
    email: String!
    password: String!
    tier: UserTier
    interest: String
    organization: String
    job_position: String
    country: String
    organization_type: OrganizationType
  }

  input newLoginInput {
    email: String!
    password: String!
  }

  type Query {
    tradersUsers(input: newTraderInput): [TraderUser]!
    sessionsData(input: newTraderSessionInput): [TraderSession]!
    DatabankUser: [DatabankUser]!
  }

  type Mutation {
    register(input: newRegisterInput!): DatabankUser!
    login(input: newLoginInput!): DatabankUser!
    editUser(input: newEditUserInput!): EditedUserOrError!
    deleteUser(input: newDeleteUserInput!): DeletedUserOrError!
  }
`;

module.exports = typeDefs;
