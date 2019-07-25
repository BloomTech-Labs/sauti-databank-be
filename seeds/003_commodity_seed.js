exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("commodity")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("commodity").insert([{ name: "Maize" }]);
    });
};
