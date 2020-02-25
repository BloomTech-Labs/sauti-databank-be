const db = require("../dbConfig");

module.exports = {
  findAll,
  findBy,
  findOne,
  findByEmail,
  create,
  updateById,
  removeById,
  removeByEmail
};

function findAll() {
  return db("databank_users");
}

function findOne(filter) {
  return db("databank_users")
    .where(filter)
    .first();
}

function findBy(filter) {
  return db("databank_users").where(filter);
}

function findByEmail(email) {
  return db("databank_users")
    .where({ email })
    .first();
}

function create(user) {
  return db("databank_users")
    .insert(user)
    .then(([id]) => findBy({ id }))
    .catch(err => console.log(err));
}

function updateById(id, body) {
  return db("databank_users")
    .where({ id })
    .update(body);
}

function removeById(id) {
  return db("databank_users")
    .where({ id })
    .delete();
}

function removeByEmail(email) {
  return db("databank_users")
    .where({ email })
    .delete();
}
