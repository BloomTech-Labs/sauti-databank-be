const db = require('../data/dbConfig')

const add = (trader) => db('users').insert(trader);

module.exports = { add }