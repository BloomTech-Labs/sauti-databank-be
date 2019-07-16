exports.up = function(knex, Promise) {
    return knex.schema.createTable('sessions', sessions => {
        sessions.increments();

        sessions
            .string("language", 100)
            .notNullable()
        sessions
            .string("country", 100)
            .notNullable()
        sessions
            .string("product", 100)
            .notNullable()
    })
  
};

exports.down = function(knex, Promise) {
    knex.schema.dropTableIfExists('sessions');
};
