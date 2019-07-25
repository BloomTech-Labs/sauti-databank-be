exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("commodity_selection")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("commodity_selection").insert([
        { commodity_id: 2, sessions_id: 2 },
        { commodity_id: 2, sessions_id: 12 },
        { commodity_id: 2, sessions_id: 22 },
        { commodity_id: 2, sessions_id: 32 },
        { commodity_id: 2, sessions_id: 42 },
        { commodity_id: 2, sessions_id: 52 },
        { commodity_id: 2, sessions_id: 62 },
        { commodity_id: 2, sessions_id: 72 },
        { commodity_id: 2, sessions_id: 82 },
        { commodity_id: 2, sessions_id: 92 },
        { commodity_id: 2, sessions_id: 102 },
        { commodity_id: 2, sessions_id: 112 },
        { commodity_id: 2, sessions_id: 122 },
        { commodity_id: 2, sessions_id: 132 },
        { commodity_id: 2, sessions_id: 142 }
      ]);
    });
};
