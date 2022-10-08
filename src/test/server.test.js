const session = require("supertest-session");
const mongoose = require("mongoose");
const app = require("../app.js");

const agent = session(app);

describe("test API and database", () => {
  beforeAll(async () => {
    await mongoose.connect("mongodb://localhost/weatherdb");
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  it("respond with 400, if the city name is not entered", () =>
    agent.get("/api/city").expect(400));

  it("respond with 400, if the city does not exist", async () => {
    const response = await agent
      .get("/api/city")
      .send({ name: "imaginary city" });

    expect(response.status).toBe(400);
  });

  describe("a correct city is sent", () => {
    let response;
    beforeAll(async () => {
      response = await agent.get("/api/city").send({ name: "argentina" });
    });

    it("respond with 200, when the city is valid", async () =>
      expect(response.status).toBe(200));

    it("returns an object with the properties `name`, `temp`, `temp_min`, `temp_max` and `img`", async () => {
      expect(response.body[0]).toEqual(
        expect.objectContaining({
          name: expect.any(String),
          temp: expect.any(Number),
          temp_min: expect.any(Number),
          temp_max: expect.any(Number),
          img: expect.any(String),
        })
      );
    });

    it("returns, in the header, the property `delay-time` with value type `String`", async () => {
      expect(response.headers).toEqual(
        expect.objectContaining({
          "time-delay": expect.any(String),
        })
      );
    });
  });
});
