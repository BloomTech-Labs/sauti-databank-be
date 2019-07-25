// Building schema for data model
exports.up = function(knex, Promise) {
  // Users table
  return (
    knex.schema
      .createTable("users", users => {
        // // Primary key
        users.increments();
        //users.integer("id");
        //users.integer('id').primary().unsigned()

        // Gender
        users.string("gender", 10);
      })

      // Sessions table
      .createTable("sessions", sessions => {
        sessions.increments();

        // // Primary key
        //sessions.integer("id");

        // User id, foreign key
        // We had to add .unsigned() for our foreign keys because mySQL needs us to mark this if the data will never have a negative value
        sessions
          .integer("user_id")
          .unsigned()
          .references("id")
          .inTable("users")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");

        // Timestamp
        sessions.timestamp("date");
      })

      // Commodity table
      .createTable("commodity", commodity => {
        commodity.increments();

        // Name
        commodity.string("name", 100);
      })

      // Commodity selection table
      .createTable("commodity_selection", commodity_selection => {
        commodity_selection.increments();

        // Commodity id, foreign key
        commodity_selection
          .integer("commodity_id")
          .unsigned()
          .references("id")
          .inTable("commodity")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");

        // Session id, foreign key
        commodity_selection
          .integer("sessions_id")
          .unsigned()
          .references("id")
          .inTable("sessions")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");
      })
  );
};

exports.down = function(knex, Promise) {
  knex.schema.dropTableIfExists("users");
  knex.schema.dropTableIfExists("sessions");
  knex.schema.dropTableIfExists("commodity");
  knex.schema.dropTableIfExists("commodity_selection");
};
