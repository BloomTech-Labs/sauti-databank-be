exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("sessions")
    .truncate()
    .then(function() {
      // Inserts seed entries
      // assume 1 session per user for dummy data but real world will have multiple sessions per user
      return knex("sessions").insert([
        { user_id: 1, date: "2017-01-01 12:12:12" },
        { user_id: 2, date: "2018-01-01 12:12:12" },
        { user_id: 3, date: "2019-01-01 12:12:12" },
        { user_id: 4, date: "2017-01-01 12:12:12" },
        { user_id: 5, date: "2018-01-01 12:12:12" },
        { user_id: 6, date: "2017-01-01 12:12:12" },
        { user_id: 7, date: "2018-01-01 12:12:12" },
        { user_id: 8, date: "2019-01-01 12:12:12" },
        { user_id: 9, date: "2017-01-01 12:12:12" },
        { user_id: 10, date: "2018-01-01 12:12:12" },
        { user_id: 11, date: "2017-01-01 12:12:12" },
        { user_id: 12, date: "2018-01-01 12:12:12" },
        { user_id: 13, date: "2019-01-01 12:12:12" },
        { user_id: 14, date: "2017-01-01 12:12:12" },
        { user_id: 15, date: "2018-01-01 12:12:12" }
      ]);
    });
};
