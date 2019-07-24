const db = require('../data/dbConfig');

module.exports = {
    find,
    getProduct
};

function find() {
    return db('sessions');
}

function getProduct(id) {
    return db('sessions')
    .join('users', { 'sessions.user_id': 'users.id' })
    .join('commodity_selection', { 'commodity_selection.sessions_id': 'sessions.id'})
    .where({ 'commodity_selection.commodity_id': id })
}