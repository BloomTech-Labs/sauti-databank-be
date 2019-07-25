exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("commodity_selection")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("commodity_selection").insert([
        { commodity_id: 1, sessions_id: 1 },
        { commodity_id: 10, sessions_id: 1 },
        { commodity_id: 21, sessions_id: 1 },
        { commodity_id: 31, sessions_id: 1 },
        { commodity_id: 41, sessions_id: 1 },
        { commodity_id: 51, sessions_id: 1 },
        { commodity_id: 61, sessions_id: 1 },
        { commodity_id: 71, sessions_id: 1 },
        { commodity_id: 81, sessions_id: 1 },
        { commodity_id: 91, sessions_id: 1 },
        { commodity_id: 101, sessions_id: 1 },
        { commodity_id: 111, sessions_id: 1 },
        { commodity_id: 121, sessions_id: 1 },
        { commodity_id: 131, sessions_id: 1 },
        { commodity_id: 141, sessions_id: 1 }
      ]);
    });
};
