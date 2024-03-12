import { response } from "express";
import { app } from "../app";
import request from "supertest";

describe("Test the path", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/api/2024-02-19")
      .expect(200);
  });

  test("It should return the correct response", async () => {
    const response = await request(app)
      .get("/api/2024-02-19")
    expect(JSON.parse(response.text))
    .toEqual({
      "unix":1708300800000,"utc":
      "Mon, 19 Feb 2024 00:00:00 GMT"
    })
  });
});