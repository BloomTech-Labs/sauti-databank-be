//query structure - that tells frontend what can be requested.

const { buildSchema } = require('graphql');
const schema = buildSchema(`
    scalar Date

    type Query {
        tradersUsers(
            id: Int,
            gender: String,
            age: String,
            education: String,
            crossing_freq: String,
            produce: String,
            primary_income: String,
            language: String,
            country_of_residence: String,
        ): [User]

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
    
    type User { 
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
`);

module.exports = schema; 