const data = require("../models/model");

// Used to get data from "traders" table only
const getTraders = async args => {
    const traderUsers = await data.getTraders();

    let filtered = traderUsers;

    for (let arg in args) {
        filtered = filtered.filter(trader => trader[arg] === args[arg] )
    }

    return filtered;
}

// Used to get data from "traders" AND "parsed_data" table joined together
const getDataSessions = async args => {
    const traderUsers = await data.getDataSessions();

    let filtered = traderUsers;

    for (let arg in args) {
        filtered = filtered.filter(trader => trader[arg] === args[arg] )
    }

    return filtered;
}


module.exports = {
    getTraders,
    getSessions,
    getDataSessions
}