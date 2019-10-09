const express = require('express');
const helmet = require('helmet');
const sessions = require('../routes/sessions-router');
const users = require('../routes/users-router');
const cors = require('cors');
const proDes = require('../tab2-routes/proDes-router');
const reqAge = require('../tab2-routes/mostReqAge-router');
const comCat = require('../tab2-routes/comCat-router');
const proCom = require('../tab2-routes/proCom-router');
const infoPro = require('../tab2-routes/infoPro-router');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/sessions', sessions);
server.use('/users', users);

// Tab 2
server.use('/dest-info', proDes);
server.use('/agency-info', reqAge);
server.use('/commodity-cat', comCat);
server.use('/procedure-com', proCom);
server.use('/info-pro', infoPro);

server.get('/', (req, res) => {
	res.status(200).send('FFT WAS HERE!!!');
	
});

module.exports = server;
