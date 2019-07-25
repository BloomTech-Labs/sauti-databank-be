exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("commodity_selection")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("commodity_selection").insert([
        { commodity_id: 10, sessions_id: 10 },
        { commodity_id: 10, sessions_id: 20 },
        { commodity_id: 10, sessions_id: 30 },
        { commodity_id: 10, sessions_id: 40 },
        { commodity_id: 10, sessions_id: 50 },
        { commodity_id: 10, sessions_id: 60 },
        { commodity_id: 10, sessions_id: 70 },
        { commodity_id: 10, sessions_id: 80 },
        { commodity_id: 10, sessions_id: 90 },
        { commodity_id: 10, sessions_id: 100 },
        { commodity_id: 10, sessions_id: 110 },
        { commodity_id: 10, sessions_id: 120 },
        { commodity_id: 10, sessions_id: 130 },
        { commodity_id: 10, sessions_id: 140 },
        { commodity_id: 10, sessions_id: 150 }
      ]);
    });
};
