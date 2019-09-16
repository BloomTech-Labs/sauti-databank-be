const db = require("../data/dbConfig");

module.exports = {
  find,
  getProduct,
  findRealSessions,
  findLanceData,
  getUsersTable,
  findTestData
};

function find() {
  return db("sessions");
}

function findRealSessions() {
  return db("csv_import");
}

function findLanceData() {
  return db("platform_sessions");
}

function findTestData() {
  return db("platform_sessions");
}

function getUsersTable() {
  return db("users");
}

function getProduct(id) {
  return db("sessions")
    .join("users", { "sessions.user_id": "users.id" })
    .join("commodity_selection", {
      "commodity_selection.sessions_id": "sessions.id"
    })
    .where({ "commodity_selection.commodity_id": id });
}
