exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("commodity_selection")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("commodity_selection").insert([
        { commodity_id: 1, sessions_id: 1 },
        { commodity_id: 1, sessions_id: 2 },
        { commodity_id: 1, sessions_id: 3 },
        { commodity_id: 1, sessions_id: 4 },
        { commodity_id: 1, sessions_id: 5 },
        { commodity_id: 1, sessions_id: 6 },
        { commodity_id: 1, sessions_id: 7 },
        { commodity_id: 1, sessions_id: 8 },
        { commodity_id: 1, sessions_id: 9 },
        { commodity_id: 1, sessions_id: 10 },
        { commodity_id: 1, sessions_id: 11 },
        { commodity_id: 1, sessions_id: 12 },
        { commodity_id: 1, sessions_id: 13 },
        { commodity_id: 1, sessions_id: 14 },
        { commodity_id: 1, sessions_id: 15 }
      ]);
    });
};
