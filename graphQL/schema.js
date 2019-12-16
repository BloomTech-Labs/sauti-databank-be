const { buildSchema } = require('graphql');
const schema = buildSchema(`
    type Query {
        tradersData(request_value: String): [SautiTrader]
        tradersUsers(limit: Int, age: Int): [User]
        tradersCommodities(product: String, product_cat: String): [Commodity]
        businessBehaviour(data_key: String): [conceptData]
    }

    type SautiTrader {
        sess_id: Int
        cell_num: String
        created_date: String
        update: String
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
        primary_income: String
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
        unit: String
    }

    type conceptData {
        data_id: Int
        data_key: String
        data_value: String
        cell_num: Int
    }
`);

module.exports = schema; 