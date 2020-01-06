const supertest = require("supertest");
const server = require("../server");

describe("server.js", () => {
  describe("index route", () => {
    it("should return a graphiQL route", async () => {
      const response = await supertest(server)
        .get("/graphql")

        .expect("Content-Type", /json/);
    });

    it("should return text from base route /", () => {
      return supertest(server)
        .get("/")
        .expect("Content-Type", "text/html; charset=utf-8");
    });

    // it("should confirm text from graphiQL route", () => {
    //   return supertest(server)
    //     .get("/")

    //     .then(res => {
    //       expect(res.head.title).toBe("GraphiQL");
    //       done();
    //     });
    // });
  });
});
