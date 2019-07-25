exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("commodity_selection")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("commodity_selection").insert([
        { commodity_id: 1, sessions_id: 2 },
        { commodity_id: 1, sessions_id: 21 },
        { commodity_id: 1, sessions_id: 31 },
        { commodity_id: 1, sessions_id: 41 },
        { commodity_id: 1, sessions_id: 51 },
        { commodity_id: 1, sessions_id: 61 },
        { commodity_id: 1, sessions_id: 71 },
        { commodity_id: 1, sessions_id: 81 },
        { commodity_id: 1, sessions_id: 91 },
        { commodity_id: 1, sessions_id: 101 },
        { commodity_id: 1, sessions_id: 111 },
        { commodity_id: 1, sessions_id: 121 },
        { commodity_id: 1, sessions_id: 131 },
        { commodity_id: 1, sessions_id: 141 },
        { commodity_id: 1, sessions_id: 151 }
      ]);
    });
};
