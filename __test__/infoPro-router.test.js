const supertest = require("supertest");
const server = require("../api/server.js");



//Get all infoPro categories
describe('/info-pro',  () => {
    it('returns 200', async () => {
        await supertest(server).get('/info-pro').expect(200)
    });
    it('returns json content', async () => {
        await supertest(server).get('/info-pro').expect('Content-Type', /json/i)
    });
})

