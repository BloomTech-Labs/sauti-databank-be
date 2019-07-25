exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("commodity")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("commodity").insert([{ id: 1, name: "Maize" }]);
    });
};
