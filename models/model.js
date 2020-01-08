const db = require('../data/dbConfig')

const getUsers = () => {
   return db('traders as t');
}

const getSessions = () => {
   return db('traders as t')
      .join('information_demand as id', 'id.cell_num', 't.cell_num')
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
         'id.request_type',
         'id.request_value'
      )
}

const findLanceData = () => {
   return db("platform_sessions");
 }

const batchInsertTraders = (rows) => {
   return db.batchInsert('users', rows, 1000);
}

const batchInsertInfoDemand = (rows) => {
   return db.batchInsert('information_demand', rows, 1000);
 }


module.exports = { 
   getUsers, 
   getSessions,
   findLanceData,
   batchInsertTraders,
   batchInsertInfoDemand
}