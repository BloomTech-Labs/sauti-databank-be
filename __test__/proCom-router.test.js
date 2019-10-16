const supertest = require('supertest');
const server = require('../api/server.js');

describe('/procedure-com', () => {
    it('returns 200', async() => {
        await supertest(server).get('/procedure-com').expect(200)
    });
    it('returns json content', async() => {
        await supertest(server).get('/procedure-com').expect('Content-Type', /json/i)
    });
})