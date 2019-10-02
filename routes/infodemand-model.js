const db = require('../data/dbConfig')


const add = (info_row) => db('information_demand').insert(info_row)

module.exports = {
    add,
}
