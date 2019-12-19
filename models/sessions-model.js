const db = require('../data/dbconfig')

function findLanceData() {
    return db("platform_sessions");
  }

module.exports = { findLanceData }