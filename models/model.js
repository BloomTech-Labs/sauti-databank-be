const db = require('../dbConfig')

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
         'id.request_value',
         'id.created_date'
      )
}

const getDataSessions = () => {
   return db('traders as t')
      .join('parsed_data as pd', 'pd.cell_num', 't.cell_num')
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
         'pd.procedurecommodity',
         'pd.procedurecommoditycat',
         'pd.proceduredest',
         'pd.procedurerequireddocument',
         'pd.procedurerelevantagency',
         'pd.procedureorigin',
         'pd.commoditycountry',
         'pd.commoditymarket',
         'pd.commoditycat',
         'pd.commodityproduct',
         'pd.exchangedirection',
         'pd.created_date'
      )
}

const findLanceData = () => {
   return db("platform_sessions2");
}

const batchInsert = (table, rows) => {
   return db.batchInsert(table, rows, 500).then(() => {
      return db(table).count('*').then(res => console.log("ADDED", res));
   });
}

const truncateTable = (table) => {
   return db(table).truncate().then(() => {
      return db(table).count('*').then(res => console.log("DELETED", res))
   });
}


module.exports = {
   getUsers,
   getSessions,
   findLanceData,
   batchInsert,
   truncateTable,
   getDataSessions
}