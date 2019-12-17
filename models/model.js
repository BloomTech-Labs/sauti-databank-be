const db = require('../data/dbconfig')

const getUsers = () => {
   return db('traders')
}

const getSessions = () => {
   return db('traders as t')
      .join('information_demand as id', 'id.cell_num', 't.cell_num')
      .join('request_type as rt', 'id.request_type_id', 'rt.id')
      .select(
         't.id',
         't.cell_num',
         't.gender',
         't.age',
         't.education',
         't.crossing_freq',
         't.produce',
         't.primary_income',
         't.language',
         't.country_of_residence',
         'rt.request_type',
         'id.request_value'
      )
}


module.exports = { getUsers, getSessions }