exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("sessions")
    .del()
    .then(function() {
      // Inserts seed entries
      // assume 1 session per user for dummy data but real world will have multiple sessions per user
      return knex("sessions").insert([
        { user_id: 1, date: "2017-01-01 12:12:12" },
        { user_id: 11, date: "2018-01-01 12:12:12" },
        { user_id: 21, date: "2019-01-01 12:12:12" },
        { user_id: 31, date: "2017-01-01 12:12:12" },
        { user_id: 41, date: "2018-01-01 12:12:12" },
        { user_id: 51, date: "2017-01-01 12:12:12" },
        { user_id: 61, date: "2018-01-01 12:12:12" },
        { user_id: 71, date: "2019-01-01 12:12:12" },
        { user_id: 81, date: "2017-01-01 12:12:12" },
        { user_id: 91, date: "2018-01-01 12:12:12" },
        { user_id: 101, date: "2017-01-01 12:12:12" },
        { user_id: 111, date: "2018-01-01 12:12:12" },
        { user_id: 121, date: "2019-01-01 12:12:12" },
        { user_id: 131, date: "2017-01-01 12:12:12" },
        { user_id: 141, date: "2018-01-01 12:12:12" }
      ]);
    });
};
