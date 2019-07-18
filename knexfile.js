// Update with your config settings.
require("dotenv").config();

module.exports = {
  development: {
    client: "mysql",
    connection: {
      host: "localhost",
      user: "root",
      password: "password",
      database: "sauti",
      charset: "utf8"
    }
  },

  staging: {
    client: "mysql",
    connection: process.env.CLEARDB_DATABASE_URL,
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
    connection: process.env.CLEARDB_DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },
  testing: {
    client: "mysql",
    connection: {
      filename: "./data/test"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  }
};
