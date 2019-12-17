exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("sessions")
    .del()
    .then(function() {
      // Inserts seed entries
      // assume 1 session per user for dummy data but real world will have multiple sessions per user
      return knex("sessions").insert([
        {  id: 1, user_id: 1, date: "2017-01-01 12:12:12" },
        {  id: 2, user_id: 2, date: "2018-01-01 12:12:12" },
        {  id: 3, user_id: 3, date: "2019-01-01 12:12:12" },
        {  id: 4, user_id: 4, date: "2017-01-01 12:12:12" },
        {  id: 5, user_id: 5, date: "2018-01-01 12:12:12" },
        {  id: 6, user_id: 6, date: "2018-01-01 12:12:12" },
        {  id: 7, user_id: 7, date: "2018-01-01 12:12:12" },
        {  id: 8, user_id: 8, date: "2019-01-01 12:12:12" },
        {  id: 9, user_id: 9, date: "2017-01-01 12:12:12" },
        {  id: 10, user_id: 10, date: "2018-01-01 12:12:12" },
        {  id: 11, user_id: 11, date: "2017-01-01 12:12:12" },
        {  id: 12, user_id: 12, date: "2018-01-01 12:12:12" },
        {  id: 13, user_id: 13, date: "2019-01-01 12:12:12" },
        {  id: 14, user_id: 14, date: "2017-01-01 12:12:12" },
        {  id: 15, user_id: 15, date: "2017-01-01 12:12:12" }
      ]);
    });
};
