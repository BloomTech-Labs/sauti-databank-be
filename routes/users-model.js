const db = require('../data/dbConfig')

const get = () => db('users')

const add = (user) => db('users').insert(user)

// Education functions 

const getEducation = () => db('users').whereNot({education: null})

const getEducationPrimary = () => db('users').where({education: "Primary"})

const getEducationSecondary = () => db('users').where({education: "Secondary"})

const getEducationUni = () => db('users').where({education: "University/College"})

const getEducationNone = () => db('users').where({education: "No formal education"})

// Gender functions
const getGenderAll = () => db('users').whereNot({gender: null});

const getGenderMale = () => db('users').where({gender: "Male"});

const getGenderFemale = () => db('users').where({gender: "Female"}); 

module.exports = {
  get, add, getEducation, getEducationPrimary, getEducationSecondary, getEducationUni, getEducationNone, getGenderAll, getGenderMale, getGenderFemale
}