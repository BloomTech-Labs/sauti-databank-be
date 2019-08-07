const db = require('../data/dbConfig')

const get = () => db('users')

const add = (user) => db('users').insert(user)

const getEducation = () => db('users').whereNot({education: null})

const getEducationPrimary = () => db('users').where({education: "Primary"})

const getEducationSecondary = () => db('users').where({education: "Secondary"})

const getEducationUni = () => db('users').where({education: "University/College"})

const getEducationNone = () => db('users').where({education: "No formal education"})

//"No formal education"

module.exports = {
  get, add, getEducation, getEducationPrimary, getEducationSecondary, getEducationUni, getEducationNone
}