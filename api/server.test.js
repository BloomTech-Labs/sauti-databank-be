const request = require("supertest");
const server = require("./server.js");

const db = require("../data/dbConfig");

//rollback, migrations and seeds before each tests
/*beforeAll(async () => {
  await db.migrate.latest();
});

beforeEach(async () => {
  await db.seed.run();
});

afterAll(async () => {
  await db.migrate.rollback(null, true);
});*/

describe("server.js", () => {
  describe("index route", () => {

    it("should return an OK status code from the index route", async () => {
      const expectedStatusCode = 200;

      const response = await request(server).get("/");

      expect(response.status).toEqual(expectedStatusCode);
    });
  });


});
