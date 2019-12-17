const { buildSchema } = require('graphql');
const schema = buildSchema(`
    type Query {
        tradersData(request_value: String): [SautiTrader]
        tradersUsers(limit: Int, age: Int, education: String): [User]
        tradersCommodities(product: String, product_cat: String): [Commodity]
        businessBehaviour(data_key: String): [Business]
    }

    type Session {
        sess_id: Int
        cell_num: String
        created_date: String
        update: String
        platform_id: String
        notes: String
        request_value: String
        request_type: String
        gender: String
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
        platform_session_id: Int
    }

    type Business {
        id: Int
        data_id: Int
        data_key: String
        data_value: String
        cell_num: Int
        source: String
        country: String
        market: String
        product: String
    }
`);

module.exports = schema; 