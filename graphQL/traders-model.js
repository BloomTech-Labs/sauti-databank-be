const db = require('../data/dbconfig')

const add = (trader) => db('traders').insert(trader);

module.exports = { add }