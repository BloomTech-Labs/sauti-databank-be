const db = require("../data/dbConfig");

const add = async function(info_row) {
  const insertedData = await db("information_demand").insert(info_row);
  return insertedData;
};

const addition = async function(info_row) {
  x = await db("info_demand_2").insert(info_row);
  return x;
};

module.exports = {
  add,
  addition
};