const db = require('../dbConfig')

// Get all traders
const getTraders = () => {
   return db('traders as t');
}

// Get all joined sessions data (CURRENT VERSION) 
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

// Get all joined sessions data (NEW VERSION)
// This function will take over `getSessions` above once code is fully refactored.
// Need to keep the above function until everything is working perfectly
// Deployed code is still currently running off `getSessions` above
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

// Retrieve sessions data so it can be parsed in `tradersDataParser.js` and `sessionsDataParser.js`
const findLanceData = () => {
   return db("platform_sessions2");
}

// ============ These two functions run every 24 hours on heroku, to delete, and reparse the traders, and sessions
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
   getSessions,
   findLanceData,
   batchInsert,
   truncateTable,
   getDataSessions
}