const { buildSchema } = require('graphql');
const schema = buildSchema(`
    type Query {
        tradersData(request_value: String): [SautiTrader]
        tradersUsers(limit: Int, age: Int): [User]
        tradersCommodities(produce: String): [Commodity]
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
        primary)income: String
        language: String
        country_of_residence: String
    }

    type Commodity {
        id: Int
        source: String
        market: String
        country: String
        product_cat: String
        product_agg: String
        product: String
        retail: Int
        wholesale: Int
        currency: String
        unit: Int
    }
`);

module.exports = schema; 