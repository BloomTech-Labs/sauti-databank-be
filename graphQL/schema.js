const { buildSchema } = require('graphql');
const schema = buildSchema(`
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
        ): [Session]

        tradersUsers(
            limit: Int, 
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
`);

module.exports = schema; 