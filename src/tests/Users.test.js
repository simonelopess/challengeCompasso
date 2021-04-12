/* eslint-disable no-undef */
import Users from "./Users";

it("Api Testing", async function () {
  const response = new Users();

  var data = await response.api();
  expect(data[0].id).toEqual(1);
});
