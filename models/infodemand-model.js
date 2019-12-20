const db = require("../data/dbConfig");

const batchInsert = (rows) => {
  return db.batchInsert('information_demand', rows, 1000);
}

module.exports = {
  batchInsert
};
