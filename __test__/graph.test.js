// import {
//   makeExecutableSchema,
//   addMockFunctionsToSchema,
//   mockServer
// } from "graphql-tools";
// import schema from "./graphQL/schema.js";

// const testSchema = `
// type Query {
//     tradersData(
//         age: String,
//         gender: String
//     )
// }`;

// const myMockServer = mockServer(schema, {
//   tradersUsers: () => ({
//     age: () => User.age,
//     gender: User.gender
//   })
// });

// mockServer.query(`
// tradersUser {
//     age
//     gender}`);

// customize mocking of a field or type based on the query arguments

// const testCaseA = {
//   //   id: "Test case A",
//   query: `
//     query test  {
//   tradersUsers {
//     gender
//     age
//   }
// }
//   `,
//   //   variables: {},
//   //   context: {},
//   expected: { data: { gender: [{ kind: "Male" }] } }
// };

// describe("Schema", () => {
//   // Array of case types
//   const cases = [testCaseA];

//   const mockSchema = makeExecutableSchema({ schema });
//   console.log("testing schema", cases);

//   // Here we specify the return payloads of mocked types
//   addMockFunctionsToSchema({
//     schema: mockSchema,

//     mocks: {
//       limit: Int,
//       id: Int,
//       gender: String,
//       age: String,
//       education: String,
//       crossing_freq: String,
//       produce: String,
//       primary_income: String,
//       language: String,
//       country_of_residence: String
//     }
//   });

//   test("has valid type definitions", async () => {
//     expect(async () => {
//       const MockServer = mockServer(schema);

//       await MockServer.query(`{ schema { type Query { tradersUsers } } }`);
//     }).not.toThrow();
//   });

//   cases.forEach(obj => {
//     const { id, query, variables, context: ctx, expected } = obj;

//     test(`query: ${id}`, async () => {
//       return await expect(
//         graphql(mockSchema, query, null, { ctx }, variables)
//       ).resolves.toEqual(expected);
//     });
//   });
// });
