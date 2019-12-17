const data = require("../models/model")

const getUsers = async args => {
    const traderUsers = await data.getUsers();

    let filtered = traderUsers;

    for (let arg in args) {
        filtered = filtered.filter(trader => trader[arg] === args[arg] )
    }

    return filtered;
}

const getSessions = async args => {
    const traderUsers = await data.getSessions();

    let filtered = traderUsers;

    for (let arg in args) {
        filtered = filtered.filter(trader => trader[arg] === args[arg] )
    }

    return filtered;
}

module.exports = {
    getUsers,
    getSessions
}