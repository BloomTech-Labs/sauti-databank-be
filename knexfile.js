// Update with your config settings.
require("dotenv").config();

module.exports = {
  development: {
    client: "mysql",
    connection: {
      host: "160.153.141.46",
      user: "lambda2019",
      password: "JlgRzqmvh83Z",
      database: "lambdaStaging",
      charset: "utf8"
    }
  },

  staging: {
    client: "mysql",
     connection: {
      host: "160.153.141.46",
      user: "lambda2019",
      password: "JlgRzqmvh83Z",
      database: "lambdaStaging",
      charset: "utf8"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "mysql",
    connection: {
      host: "160.153.141.46",
      user: "lambda2019",
      password: "JlgRzqmvh83Z",
      database: "lambdaStaging",
      charset: "utf8",
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },
  // testing: {
  //   client: "mysql",
  //   connection: {
  //     host: "160.153.141.46",
  //     user: "lambda2019",
  //     password: "JlgRzqmvh83Z",
  //     database: "lambdaStaging",
  //     charset: "utf8",
  //   useNullAsDefault: true,
  // }
}
};