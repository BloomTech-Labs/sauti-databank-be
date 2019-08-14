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
// Crossing Freq Tests
    describe('Crossing Frequency', () => {
        
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

    describe('Education', () => {
        describe('/users/all/education/all', () => {
        
            it('returns 200', () => {
                return supertest(server).get("/users/all/education/all").expect(200)
            });
    
            it('returns json content', () => {
                return supertest(server).get("/users/all/education/all").expect('Content-Type', /json/i)
            });
        });

        describe('/users/all/education/none/count', () => {
        
            it('returns 200', () => {
                return supertest(server).get("/users/all/education/none/count").expect(200)
            });
    
            it('returns json content', () => {
                return supertest(server).get("/users/all/education/none/count").expect('Content-Type', /json/i)
            });
        });

        describe('/users/all/education/primary/count', () => {
        
            it('returns 200', () => {
                return supertest(server).get("/users/all/education/primary/count").expect(200)
            });
    
            it('returns json content', () => {
                return supertest(server).get("/users/all/education/primary/count").expect('Content-Type', /json/i)
            });
        });

        describe('/users/all/education/secondary/count', () => {
        
            it('returns 200', () => {
                return supertest(server).get("/users/all/education/secondary/count").expect(200)
            });
    
            it('returns json content', () => {
                return supertest(server).get("/users/all/education/secondary/count").expect('Content-Type', /json/i)
            });
        });
        describe('/users/all/education/uni/count', () => {
        
            it('returns 200', () => {
                return supertest(server).get("/users/all/education/uni/count").expect(200)
            });
    
            it('returns json content', () => {
                return supertest(server).get("/users/all/education/uni/count").expect('Content-Type', /json/i)
            });
        });
    });

    describe('Language', () => {
        describe('/users/all/language/all', () => {
        
            it('returns 200', () => {
                return supertest(server).get("/users/all/language/all").expect(200)
            });
    
            it('returns json content', () => {
                return supertest(server).get("/users/all/language/all").expect('Content-Type', /json/i)
            });
        });

        describe('/users/all/language/english/count', () => {
        
            it('returns 200', () => {
                return supertest(server).get("/users/all/language/english/count").expect(200)
            });
    
            it('returns json content', () => {
                return supertest(server).get("/users/all/language/english/count").expect('Content-Type', /json/i)
            });
        });

        describe('/users/all/language/swahili/count', () => {
        
            it('returns 200', () => {
                return supertest(server).get("/users/all/language/swahili/count").expect(200)
            });
    
            it('returns json content', () => {
                return supertest(server).get("/users/all/language/swahili/count").expect('Content-Type', /json/i)
            });
        });

        describe('/users/all/language/kinya/count', () => {
        
            it('returns 200', () => {
                return supertest(server).get("/users/all/language/kinya/count").expect(200)
            });
    
            it('returns json content', () => {
                return supertest(server).get("/users/all/language/kinya/count").expect('Content-Type', /json/i)
            });
        });

        describe('/users/all/language/luganda/count', () => {
        
            it('returns 200', () => {
                return supertest(server).get("/users/all/language/luganda/count").expect(200)
            });
    
            it('returns json content', () => {
                return supertest(server).get("/users/all/language/luganda/count").expect('Content-Type', /json/i)
            });
        });

        describe('/users/all/language/lukiga/count', () => {
        
            it('returns 200', () => {
                return supertest(server).get("/users/all/language/lukiga/count").expect(200)
            });
    
            it('returns json content', () => {
                return supertest(server).get("/users/all/language/lukiga/count").expect('Content-Type', /json/i)
            });
        });
    });

    describe('Country', () => {
        describe('/users/all/country/all', () => {
            it('returns 200', () => {
                return supertest(server).get("/users/all/country/all").expect(200)
            });
    
            it('returns json content', () => {
                return supertest(server).get("/users/all/country/all").expect('Content-Type', /json/i)
            });
        });

        describe('/users/all/country/kenya/count', () => {
            it('returns 200', () => {
                return supertest(server).get("/users/all/country/kenya/count").expect(200)
            });
    
            it('returns json content', () => {
                return supertest(server).get("/users/all/country/kenya/count").expect('Content-Type', /json/i)
            });
        });

        describe('/users/all/age/group-one/count', () => {
            it('returns 200', () => {
                return supertest(server).get("/users/all/age/group-one/count").expect(200)
            });
    
            it('returns json content', () => {
                return supertest(server).get("/users/all/age/group-one/count").expect('Content-Type', /json/i)
            });
        });

        describe('/users/all/country/rwanda/count', () => {
            it('returns 200', () => {
                return supertest(server).get("/users/all/country/rwanda/count").expect(200)
            });
    
            it('returns json content', () => {
                return supertest(server).get("/users/all/country/rwanda/count").expect('Content-Type', /json/i)
            });
        });
    });

    describe('Age', () => {
        describe('/users/all/age/all', () => {
            it('returns 200', () => {
                return supertest(server).get("/users/all/age/all").expect(200)
            });
    
            it('returns json content', () => {
                return supertest(server).get("/users/all/age/all").expect('Content-Type', /json/i)
            });
        });

        describe('/users/all/age/group-zero/count', () => {
            it('returns 200', () => {
                return supertest(server).get("/users/all/age/group-zero/count").expect(200)
            });
    
            it('returns json content', () => {
                return supertest(server).get("/users/all/age/group-zero/count").expect('Content-Type', /json/i)
            });
        });

        describe('/users/all/age/group-one/count', () => {
            it('returns 200', () => {
                return supertest(server).get("/users/all/age/group-one/count").expect(200)
            });
    
            it('returns json content', () => {
                return supertest(server).get("/users/all/age/group-one/count").expect('Content-Type', /json/i)
            });
        });

        describe('/users/all/age/group-two/count', () => {
            it('returns 200', () => {
                return supertest(server).get("/users/all/age/group-two/count").expect(200)
            });
    
            it('returns json content', () => {
                return supertest(server).get("/users/all/age/group-two/count").expect('Content-Type', /json/i)
            });
        });

        describe('/users/all/age/group-three/count', () => {
            it('returns 200', () => {
                return supertest(server).get("/users/all/age/group-three/count").expect(200)
            });
    
            it('returns json content', () => {
                return supertest(server).get("/users/all/age/group-three/count").expect('Content-Type', /json/i)
            });
        });

        describe('/users/all/age/group-four/count', () => {
            it('returns 200', () => {
                return supertest(server).get("/users/all/age/group-four/count").expect(200)
            });
    
            it('returns json content', () => {
                return supertest(server).get("/users/all/age/group-four/count").expect('Content-Type', /json/i)
            });
        });

        describe('/users/all/age/group-five/count', () => {
            it('returns 200', () => {
                return supertest(server).get("/users/all/age/group-five/count").expect(200)
            });
    
            it('returns json content', () => {
                return supertest(server).get("/users/all/age/group-five/count").expect('Content-Type', /json/i)
            });
        });
    });
    
    describe('Primary Income', () => {
        describe('/users/all/primary-income/all', () => {
            it('returns 200', () => {
                return supertest(server).get("/users/all/primary-income/all").expect(200)
            });
    
            it('returns json content', () => {
                return supertest(server).get("/users/all/primary-income/all").expect('Content-Type', /json/i)
            });
        });
        describe('/users/all/primary-income/yes/count', () => {
            it('returns 200', () => {
                return supertest(server).get("/users/all/primary-income/yes/count").expect(200)
            });
    
            it('returns json content', () => {
                return supertest(server).get("/users/all/primary-income/yes/count").expect('Content-Type', /json/i)
            });
        });
        describe('/users/all/primary-income/no/count', () => {
            it('returns 200', () => {
                return supertest(server).get("/users/all/primary-income/no/count").expect(200)
            });
    
            it('returns json content', () => {
                return supertest(server).get("/users/all/primary-income/no/count").expect('Content-Type', /json/i)
            });
        });
    });

    describe('Produce', () => {
        describe('/users/all/produce/all', () => {
            it('returns 200', () => {
                return supertest(server).get("/users/all/produce/all").expect(200)
            });
    
            it('returns json content', () => {
                return supertest(server).get("/users/all/produce/all").expect('Content-Type', /json/i)
            });
        });
        describe('/users/all/produce/yes/count', () => {
            it('returns 200', () => {
                return supertest(server).get("/users/all/produce/yes/count").expect(200)
            });
    
            it('returns json content', () => {
                return supertest(server).get("/users/all/produce/yes/count").expect('Content-Type', /json/i)
            });
        });
        describe('/users/all/produce/no/count', () => {
            it('returns 200', () => {
                return supertest(server).get("/users/all/produce/no/count").expect(200)
            });
    
            it('returns json content', () => {
                return supertest(server).get("/users/all/produce/no/count").expect('Content-Type', /json/i)
            });
        });
    });
});