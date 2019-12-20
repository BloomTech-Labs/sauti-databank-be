const db = require("../data/dbConfig");

const add = (info_row) => db("information_demand").insert(info_row);

const testAdd = async (info_row) => await db("info_demand_test").insert(info_row);

module.exports = {
  add,
  testAdd
};
