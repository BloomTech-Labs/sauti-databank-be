exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("sessions")
    .del()
    .then(function() {
      // Inserts seed entries
      // assume 1 session per user for dummy data but real world will have multiple sessions per user
      return knex("sessions").insert([
        { user_id: 10, date: "2017-01-01 12:12:12" },
        { user_id: 20, date: "2018-01-01 12:12:12" },
        { user_id: 30, date: "2019-01-01 12:12:12" },
        { user_id: 40, date: "2017-01-01 12:12:12" },
        { user_id: 50, date: "2018-01-01 12:12:12" },
        { user_id: 60, date: "2017-01-01 12:12:12" },
        { user_id: 70, date: "2018-01-01 12:12:12" },
        { user_id: 80, date: "2019-01-01 12:12:12" },
        { user_id: 90, date: "2017-01-01 12:12:12" },
        { user_id: 100, date: "2018-01-01 12:12:12" },
        { user_id: 110, date: "2017-01-01 12:12:12" },
        { user_id: 120, date: "2018-01-01 12:12:12" },
        { user_id: 130, date: "2019-01-01 12:12:12" },
        { user_id: 140, date: "2017-01-01 12:12:12" },
        { user_id: 150, date: "2018-01-01 12:12:12" }
      ]);
    });
};
