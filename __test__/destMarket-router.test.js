const supertest = require('supertest');
const server = require('../api/server');


describe('/dest-market', () => {

    it('return 200', async () => {
        await supertest(server).get('/dest-market')
        .expect(300) 
    });
    it ('returns json content', async () => {
        await supertest(server).get('/dest-market')
        .expect('Content-Type', /json/i)
    });
});