const db = require("../dbConfig");

module.exports = {
  findAll() {
    return db("databank_users");
  },

  findyBy(filter) {
    return db("databank_users").where(filter);
  },

  findOne(id) {
    return db("databank_users")
      .where({ id })
      .first();
  },

  updateById(id, body) {
    return db("databank_users")
      .where({ id })
      .update(body);
  },

  removeById(id) {
    return db("databank_users")
      .where({ id })
      .delete();
  }
};
