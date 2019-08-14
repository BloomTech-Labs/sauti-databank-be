const supertest = require("supertest");
const server = require("../api/server.js");

const db = require("../data/dbConfig");



describe('Users Routes', () => {
    

    describe('users/all', () => {
        
        it('returns 200', () => {
            return supertest(server).get("/users/all").expect(200)
        });

        it('returns json content', () => {
            return supertest(server).get("/users/all").expect('Content-Type', /json/i)
        });
    });
});