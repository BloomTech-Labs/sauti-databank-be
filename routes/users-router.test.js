const supertest = require("supertest");
const server = require("../api/server.js");

const db = require("../data/dbConfig");



describe('Users Routes', () => {
    
    // /USERS/ALL
    describe('/users/all', () => {
        
        it('returns 200', () => {
            return supertest(server).get("/users/all").expect(200)
        });

        it('returns json content', () => {
            return supertest(server).get("/users/all").expect('Content-Type', /json/i)
        });
    });
    // /USERS/ALL/GENDER/
    describe('/users/all/gender/all', () => {
        
        it('returns 200', () => {
            return supertest(server).get("/users/all/gender/all").expect(200)
        });

        it('returns json content', () => {
            return supertest(server).get("/users/all/gender/all").expect('Content-Type', /json/i)
        });
    });
});