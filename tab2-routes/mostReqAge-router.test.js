const supertest = require('supertest');
const server = require('../api/server.js');

//Most requested agency 
describe('/agency-info', () => {
    it('returns 200', async() => {
        await supertest(server).get('/agency-info').expect(200)
    });
    it('returns json content', async() => {
        await supertest(server).get('/agency-info').expect('Content-Type', /json/i)
    });
})  