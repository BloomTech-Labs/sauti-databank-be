const db = require('../data/dbConfig')

const get = () => db('users')

const add = (user) => db('users').insert(user)

// Education functions // 

const getEducation = () => db('users').whereNot({education: null})

const getEducationPrimary = () => db('users').where({education: "Primary"})

const getEducationSecondary = () => db('users').where({education: "Secondary"})

const getEducationUni = () => db('users').where({education: "University/College"})

const getEducationNone = () => db('users').where({education: "No formal education"})

// Gender functions //
const getGenderAll = () => db('users').whereNot({gender: null});

const getGenderMale = () => db('users').where({gender: "Male"});

const getGenderFemale = () => db('users').where({gender: "Female"}); 

// Border frequency functions // 
// Futureproof: We can simplify these functions 
// E.g. const getCrossingFreq = (arg) => db('users').where({crossing_freq: arg})

const getCrossingFreqAll = () => db('users').whereNot({crossing_freq: null});

const getCrossingFreqDaily = () => db('users').where({crossing_freq: "Daily"});

const getCrossingFreqWeekly = () => db('users').where({crossing_freq: "Weekly"});

const getCrossingFreqMonthly = () => db('users').where({crossing_freq: "Monthly"});

const getCrossingFreqNever = () => db('users').where({crossing_freq: "Never"});

module.exports = {
  get, add, getEducation, getEducationPrimary, getEducationSecondary, getEducationUni, getEducationNone, getGenderAll, getGenderMale, getGenderFemale, getCrossingFreqAll, getCrossingFreqDaily, getCrossingFreqWeekly, getCrossingFreqMonthly, getCrossingFreqNever
}