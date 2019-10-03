const db = require('../data/dbConfig')
const DRYParser = require('../DRYParser')

// const add = (info_row) => db('information_demand').insert(info_row)

const add = async function(info_row){
    // console.log(x, "row")
    x = await db('information_demand').insert(info_row)
    console.log(x,'id?')
    return x
}

const get = () => db('information_demand')

module.exports = {
    add,
    get,
}
