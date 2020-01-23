const { buildSchema } = require('graphql');
const schema = buildSchema(`
    scalar Date

    type Query {
        tradersData(
            id: Int,
            gender: String,
            age: String,
            education: String,
            crossing_freq: String,
            produce: String,
            primary_income: String,
            language: String,
            country_of_residence: String,
            request_type: String,
            request_value: String,
            created_date: String,
            additional_filter_type: String,
        ): [Session]

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

    type Session {
        id: Int
        gender: String
        age: String
        education: String
        crossing_freq: String
        produce: String
        primary_income: String
        language: String
        country_of_residence: String
        request_type: String
        request_value: String
        created_date: Date
        cell_num: String
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