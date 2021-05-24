import request from "supertest";
import { expect } from "chai";
import createServer from "../source/server";
const app = createServer();

describe("auth routes", function () {
  it("/auth responds with 200", function (done) {
    request(app).get("/api/stock/1111/getStockPriceHistory").expect(200, done);
  });
});
