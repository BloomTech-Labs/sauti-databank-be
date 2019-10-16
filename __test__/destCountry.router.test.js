const supertest = require('supertest');
const server = require('../api/server');


describe('/dest-country', () => {

    it('return 200', async () => {
        await supertest(server).get('/dest-country')
        .expect(200) 
    });
    it ('returns json content', async () => {
        await supertest(server).get('/dest-country')
        .expect('Content-Type', /json/i)
    });
});