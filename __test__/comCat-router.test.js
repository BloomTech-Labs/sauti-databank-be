const supertest = require("supertest"); // import supertest
const server = require("../api/server.js"); //import server so we can test the endpoints that were created 



//Get all commodity categories 
describe('/commodity-cat', () => {

    it('returns 200', async () => {
        await supertest(server).get("/commodity-cat").expect(200) // await 
    });
    it ('returns json content', async () => {
        await supertest(server).get('/commodity-cat').expect('Content-Type', /json/i)
    });
})// describe is where you declare which endpoint you would like to test and then pass an anonymous function 

//async/await expression that pauses the execution of the async function and waits for the passed promise's resolution. it then continues the functions execution  