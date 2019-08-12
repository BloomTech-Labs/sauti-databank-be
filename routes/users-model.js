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

// Primary language functions //
// Futureproof: We can simplify these functions 
// E.g. const getCrossingFreq = (arg) => db('users').where({crossing_freq: arg}) 

const getLanguageAll = () => db('users').whereNot({language: null}); 

const getLanguageEnglish = () => db('users').where({language: "English"});

const getLanguageSwahili = () => db('users').where({language: "Swahili"}); 

const getLanguageKinya = () => db('users').where({language: "Kinyarwanda"});

const getLanguageLug = () => db('users').where({language: "Luganda"});

const getLanguageLuk = () => db('users').where({language: "Lukiga"});

// Country of residence functions // 
// Futureproof: We can simplify these functions 
// E.g. const getCrossingFreq = (arg) => db('users').where({crossing_freq: arg}) 

const getCountryAll = () => db('users').whereNot({country_of_residence: null}); 

const getCountryKenya = () => db('users').where({country_of_residence: "KEN"});

const getCountryUganda = () => db('users').where({country_of_residence: "UGA"});

const getCountryRwanda = () => db('users').where({country_of_residence: "RWA"});

// Age functions // 
// Futureproof: We can simplify these functions 
// E.g. const getCrossingFreq = (arg) => db('users').where({crossing_freq: arg}) 

const getAgeAll = () => db('users').whereNot({age: null}); 

const getAgeGroupZero = () => db('users').where({age: "10-20"});

const getAgeGroupOne = () => db('users').where({age: "20-30"});

const getAgeGroupTwo = () => db('users').where({age: "30-40"});

const getAgeGroupThree = () => db('users').where({age: "40-50"});

const getAgeGroupFour = () => db('users').where({age: "50-60"});

const getAgeGroupFive = () => db('users').where({age: "60-70"});

<<<<<<< HEAD
<<<<<<< HEAD
// Primary Income functions // 
// Futureproof: We can simplify these functions 
// E.g. const getCrossingFreq = (arg) => db('users').where({crossing_freq: arg}) 

const getPrimaryIncomeAll = () => db('users').whereNot({primary_income: null}); 

const getPrimaryIncomeYes = () => db('users').where({primary_income: "Yes"}); 

const getPrimaryIncomeNo = () => db('users').where({primary_income: "No"}); 
=======
=======
>>>>>>> 495a8fc526ff5d8af8fa54616f573db8a63c81dd
// Primary Income Functions 

const getPrimaryIncomeAll = () => db('users').whereNot({primary_income: null});

const getPrimaryIncomeYes = () => db('users').where({primary_income: "Yes"});

const getPrimaryIncomeNo = () => db('users').where({primary_income: "No"});

//Produce Functions

const getProduceAll = () => db('users').whereNot({produce: null});

const getProduceYes = () => db('users').where({produce: "Yes"});

const getProduceNo = () => db('users').where({produce: "No"});
<<<<<<< HEAD
>>>>>>> 495a8fc526ff5d8af8fa54616f573db8a63c81dd
=======
>>>>>>> 495a8fc526ff5d8af8fa54616f573db8a63c81dd


module.exports = {
  get, add, getEducation, getEducationPrimary, getEducationSecondary, getEducationUni, getEducationNone, 

  getGenderAll, getGenderMale, getGenderFemale, 

  getCrossingFreqAll, getCrossingFreqDaily, getCrossingFreqWeekly, getCrossingFreqMonthly, getCrossingFreqNever, 

  getLanguageAll, getLanguageEnglish, getLanguageSwahili, getLanguageKinya, getLanguageLug, getLanguageLuk,

  getCountryAll, getCountryKenya, getCountryUganda, getCountryRwanda, 

  getAgeAll, getAgeGroupZero, getAgeGroupOne, getAgeGroupTwo, getAgeGroupThree, getAgeGroupFour, getAgeGroupFive,

<<<<<<< HEAD
<<<<<<< HEAD
  getPrimaryIncomeAll, getPrimaryIncomeYes, getPrimaryIncomeNo, 
}
=======
=======
>>>>>>> 495a8fc526ff5d8af8fa54616f573db8a63c81dd
  getPrimaryIncomeAll, getPrimaryIncomeYes, getPrimaryIncomeNo,

  getProduceAll, getProduceYes, getProduceNo
}

<<<<<<< HEAD
>>>>>>> 495a8fc526ff5d8af8fa54616f573db8a63c81dd
=======
>>>>>>> 495a8fc526ff5d8af8fa54616f573db8a63c81dd
