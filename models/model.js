const db = require('../data/dbconfig')

const getUsers = () => {
   return db('traders as t')
}

const getSessions = () => {
   return db('traders as t')
      .join('information_demand as id', 'id.cell_num', 't.cell_num')
      .join('request_type as rt', 'id.request_type_id', 'rt.id')
      .select(
         't.id as ID',
         't.cell_num as Phone',
         't.gender as Gender',
         't.age as Age',
         't.education as Education',
         't.crossing_freq as Crossing Frequency',
         't.produce as Produce',
         't.primary_income as Primary Income',
         't.language as Language',
         't.country_of_residence as Country of Residence',
         'rt.request_type as Request Type',
         'id.request_value as Request Value'
      )
}


module.exports = { getUsers, getSessions }