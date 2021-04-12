/* eslint-disable no-undef */
import Repos from "./Repos";

it("Api Testing", async function () {
  const response = new Repos();
  var data = await response.api();
  expect(data[0].id).toEqual(26899533);
});
