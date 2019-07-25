exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("sessions")
    .del()
    .then(function() {
      // Inserts seed entries
      // assume 1 session per user for dummy data but real world will have multiple sessions per user
      return knex("sessions").insert([
        { user_id: 2, date: "2017-01-01 12:12:12" },
        { user_id: 12, date: "2018-01-01 12:12:12" },
        { user_id: 22, date: "2019-01-01 12:12:12" },
        { user_id: 32, date: "2017-01-01 12:12:12" },
        { user_id: 42, date: "2018-01-01 12:12:12" },
        { user_id: 52, date: "2017-01-01 12:12:12" },
        { user_id: 62, date: "2018-01-01 12:12:12" },
        { user_id: 72, date: "2019-01-01 12:12:12" },
        { user_id: 82, date: "2017-01-01 12:12:12" },
        { user_id: 92, date: "2018-01-01 12:12:12" },
        { user_id: 102, date: "2017-01-01 12:12:12" },
        { user_id: 112, date: "2018-01-01 12:12:12" },
        { user_id: 122, date: "2019-01-01 12:12:12" },
        { user_id: 132, date: "2017-01-01 12:12:12" },
        { user_id: 142, date: "2018-01-01 12:12:12" }
      ]);
    });
};
