const db = require('../data/dbConfig')

const get = () => db('users')

const add = (user) => db('users').insert(user)

module.exports = {
  get, add
}