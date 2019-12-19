const db = require('../data/dbConfig')

const add = (trader) => db('traders').insert(trader);

module.exports = { add }