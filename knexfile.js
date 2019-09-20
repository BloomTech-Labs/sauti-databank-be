// Update with your config settings.
require("dotenv").config();

console.log(process.env.host);

module.exports = {
  development: {
    client: "mysql",
    connection: {
      host: process.env.host,
      user: process.env.user,
      password: process.env.password,
      database: "lambdaStaging",
      charset: "utf8"
    },
    useNullAsDefault: true
  },

  staging: {
    client: "mysql",
    connection: {
      host: process.env.host,
      user: process.env.user,
      password: process.env.password,
      database: "lambdaStaging",
      charset: "utf8"
    },
    useNullAsDefault: true
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: "knex_migrations"
  },

  production: {
    client: "mysql",
    connection: {
      host: process.env.host,
      user: process.env.user,
      password: process.env.password,
      database: "lambdaStaging",
      charset: "utf8"
    },
    useNullAsDefault: true,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }

  // For local testing
  // testing: {
  //   client: "mysql",
  //   connection: {
  //     host: process.env.host,
  //     user: process.env.user,
  //     password: process.env.password,
  //     database: "lambdaStaging",
  //     charset: "utf8",
  //   useNullAsDefault: true,
  // }
};
