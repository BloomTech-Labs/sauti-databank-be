exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          gender: "female"
        },
        {
          gender: "female"
        },
        {
          gender: "female"
        },
        {
          gender: "female"
        },
        {
          gender: "female"
        },
        {
          gender: "female"
        },
        {
          gender: "female"
        },
        {
          gender: "female"
        },
        {
          gender: "female"
        },
        {
          gender: "female"
        },
        {
          gender: "male"
        },
        {
          gender: "male"
        },
        {
          gender: "male"
        },
        {
          gender: "male"
        },
        {
          gender: "male"
        }
      ]);
    });
};
