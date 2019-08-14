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
    describe('Gender', () => {
        describe('/users/all/gender/all', () => {
        
            it('returns 200', () => {
                return supertest(server).get("/users/all/gender/all").expect(200)
            });
    
            it('returns json content', () => {
                return supertest(server).get("/users/all/gender/all").expect('Content-Type', /json/i)
            });
        });
    
        describe('/users/all/gender/female/count', () => {
            
            it('returns 200', () => {
                return supertest(server).get("/users/all/gender/female/count").expect(200)
            });
    
            it('returns json content', () => {
                return supertest(server).get("/users/all/gender/female/count").expect('Content-Type', /json/i)
            });
        });

        describe('/users/all/gender/male/count', () => {
        
            it('returns 200', () => {
                return supertest(server).get("/users/all/gender/male/count").expect(200)
            });
    
            it('returns json content', () => {
                return supertest(server).get("/users/all/gender/male/count").expect('Content-Type', /json/i)
            });
        });
    });

    describe('Crossing Frequency', () => {
        // Crossing Freq Tests
    describe('/users/all/crossingfreq/all', () => {
        
        it('returns 200', () => {
            return supertest(server).get("/users/all/crossingfreq/all").expect(200)
        });

        it('returns json content', () => {
            return supertest(server).get("/users/all/crossingfreq/all").expect('Content-Type', /json/i)
        });
    });

    describe('/users/all/crossingfreq/daily/count', () => {
        
        it('returns 200', () => {
            return supertest(server).get("/users/all/crossingfreq/daily/count").expect(200)
        });

        it('returns json content', () => {
            return supertest(server).get("/users/all/crossingfreq/daily/count").expect('Content-Type', /json/i)
        });
    });

    describe('/users/all/crossingfreq/weekly/count', () => {
        
        it('returns 200', () => {
            return supertest(server).get("/users/all/crossingfreq/weekly/count").expect(200)
        });

        it('returns json content', () => {
            return supertest(server).get("/users/all/crossingfreq/weekly/count").expect('Content-Type', /json/i)
        });
    });

    describe('/users/all/crossingfreq/monthly/count', () => {
        
        it('returns 200', () => {
            return supertest(server).get("/users/all/crossingfreq/monthly/count").expect(200)
        });

        it('returns json content', () => {
            return supertest(server).get("/users/all/crossingfreq/monthly/count").expect('Content-Type', /json/i)
        });
    });

    describe('/users/all/crossingfreq/never/count', () => {
        
        it('returns 200', () => {
            return supertest(server).get("/users/all/crossingfreq/never/count").expect(200)
        });

        it('returns json content', () => {
            return supertest(server).get("/users/all/crossingfreq/never/count").expect('Content-Type', /json/i)
        });
    });
    });

    
    
});