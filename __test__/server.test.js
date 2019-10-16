const supertest = require("supertest");
const server = require("../api/server");


describe("server.js", () => {
  describe("index route", () => {

    it("should return an OK status code from the index route", async () => {
      const expectedStatusCode = 200;

      const response = await supertest(server).get("/");

      expect(response.status).toEqual(expectedStatusCode);
    });

    it('should return text from base route /', () => {
      return supertest(server).get("/").expect('Content-Type', "text/html; charset=utf-8")
    });
    it('should return FFT WAS HERE!!! from base route', () => {
      return supertest(server).get("/")
        .expect('FFT WAS HERE!!!')
      })
    });
  });

