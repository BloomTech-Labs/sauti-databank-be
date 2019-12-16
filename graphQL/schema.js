const { buildSchema } = require('graphql');
const schema = buildSchema(`
    type Query {
        tradersData(request_value: String): [SautiTrader]
        tradersUsers(limit: Int, gender: String, age: String, education: String): [User]
    }

    type SautiTrader {
        sess_id: Int
        cell_num: String
        created_date: String
        udate: String
        platform_id: String
        notes: String
        request_value: String
        request_type: String
    }

    type User { 
        id: Int
        gender: String
        age: String
        education: String
        crossing_freq: String
        produce: String
        language: String
        country_of_residence: String
    }
`);

module.exports = schema; 