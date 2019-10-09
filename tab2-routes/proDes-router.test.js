const supertest = require('supertest');
const server = require('../api/server.js');

describe('/dest-info', () => {
    it('returns 200', async() => {
        await supertest(server).get('/dest-info').expect(200)
    });
    it('returns json content', async() => {
        await supertest(server).get('/dest-info').expect('Content-Type', /json/i)
    });
})