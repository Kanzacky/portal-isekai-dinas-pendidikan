import request from "supertest";
import app from "../app.js";

describe("Test an API if it is running", () => {
  it("should return welcome with current times", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.body).toBe(
      `Welcome to the server! ${new Date().toLocaleString()}`
    );
  });
});
