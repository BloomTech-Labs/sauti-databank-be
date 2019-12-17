const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const graphqlHTTP = require('express-graphql');

// ROUTES
const sessions = require('../routes/sessions-router');
const users = require('../routes/users-router');
const proDes = require('../tab2-routes/proDes-router');
const reqAge = require('../tab2-routes/mostReqAge-router');
const comCat = require('../tab2-routes/comCat-router');
const proCom = require('../tab2-routes/proCom-router');
const infoPro = require('../tab2-routes/infoPro-router');
const topCat = require('../tab3-routes/topCat-router');
const topCom = require('../tab3-routes/topCom-router');
const exRate = require('../tab3-routes/exchangeRate-router');
const tradersGoods = require('../tab3-routes/tradersGoods-router');
const destCountry = require('../tab3-routes/destCountry-router');
const destMarket = require('../tab3-routes/destMarket-router');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());


///////////////////// GRAPHQL

const schema = require("../graphQL/schema");
const { getUsers, getSessions } = require("../graphQL/queries");


const root = {
     tradersUsers: getUsers,
     tradersData: getSessions
}

server.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
}));

///////////////////////////

// Tab 1
server.use('/sessions', sessions);
server.use('/users', users);

// Tab 2
server.use('/dest-info', proDes);
server.use('/agency-info', reqAge);
server.use('/commodity-cat', comCat);
server.use('/procedure-com', proCom);
server.use('/info-pro', infoPro);

// Tab 3
server.use('/top-cat', topCat);
server.use('/top-com', topCom);
server.use('/exchange-rate', exRate);
server.use('/traders-goods', tradersGoods);
server.use('/dest-country', destCountry);
server.use('/dest-market', destMarket);

server.get('/', (req, res) => {
	res.status(200).send('FFT WAS HERE!!!');
});

module.exports = server;
