const request = require("supertest");
const server = require("./server.js");
const sessions = require("../routes/sessions-router")

server.use("/sessions", sessions);

describe("server.js", () => {

  describe("index route", () => {
    it("should return an OK status code from the index route", async () => {
      const expectedStatusCode = 200;

      const response = await request(server).get("/");

      expect(response.status).toEqual(expectedStatusCode);
    });
  });

  describe("/sessions/all", () => {
    it("should return an OK status code from the endpoint /sessions/all", async () => {
      const expectedStatusCode = 200;

      const response = await request(sessions).get("/all");

      expect(response.status).toEqual(expectedStatusCode);
    });
  });
});
