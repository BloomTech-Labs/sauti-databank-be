const db = require('../dbConfig')

// Get all traders
const getTraders = () => {
   return db('traders as t');
}

// Get all joined sessions data
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
         't.crossing_location',
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
      .orderBy('pd.created_date', 'asc')
}

// Retrieve sessions data so it can be parsed in `tradersDataParser.js` and `sessionsDataParser.js`
const findLanceData = () => {
   return db("platform_sessions");
}

// **************** These two functions run every 24 hours on heroku, to delete, and reparse the traders, and sessions **************** 
// A batch insert into the the table of your choosing
// Used for when you have 500+ entries to put into database at once
const batchInsert = (table, rows) => {
   return db.batchInsert(table, rows, 500).then(() => {
      return db(table).count('*').then(res => console.log("ADDED", res));
   });
}

// Deletes all entries out of a table
const truncateTable = (table) => {
   return db(table).truncate().then(() => {
      return db(table).count('*').then(res => console.log("DELETED", res))
   });
}


module.exports = {
   getTraders,
   findLanceData,
   batchInsert,
   truncateTable,
   getDataSessions
}