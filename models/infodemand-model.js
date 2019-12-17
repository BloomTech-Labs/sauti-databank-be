const db = require("../data/dbConfig");

const add = async function(info_row) {
  const insertedData = await db("information_demand").insert(info_row);
  return insertedData;
};

module.exports = {
  add
};
