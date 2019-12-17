const data = require("./model")

const getData = async args => {
    const traderUsers = await data.getUsers();

    console.log(traderUsers)

    let filtered = traderUsers;

    for (let arg in args) {
        filtered = filtered.filter(trader => trader[arg] === args[arg] )
    }

    return filtered;
}

module.exports = {
    getData
}