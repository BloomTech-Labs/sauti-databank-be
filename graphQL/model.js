const db = require('../data/dbconfig')

const getData = () => {
   return db('platform_sessions as ps')
      .leftJoin('information_demand as id', 'ps.cell_num', 'id.cell_num')
      .leftJoin('request_type as rt', 'id.request_type_id', 'rt.id')
}

const getUsers = () => {
   return db('users')
}


module.exports = { getData, getUsers }