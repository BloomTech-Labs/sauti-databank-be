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

// Used to get data from "traders" AND "information_demand" table
const getSessions = async args => {
    const traderUsers = await data.getSessions();

    let filtered = traderUsers;

    for (let arg in args) {
        filtered = filtered.filter(trader => trader[arg] === args[arg] )
    }

    return filtered;
}

// Used to get data from "traders" AND "parsed_data" table
// This is the NEW master table data. `getDataSessions` function is the one to use
// Once refactor is complete, and all data is going through "parsed_data" table, you can
// delete `getSessions` function above.
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