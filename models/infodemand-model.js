const db = require("../data/dbConfig");

const add = function(info_row) {
  return db("information_demand").insert(info_row);
};

module.exports = {
  add
};
