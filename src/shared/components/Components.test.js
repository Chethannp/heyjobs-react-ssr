const fetch = require("../api");

test("Fetch jobs list", () => {
  expect.assertions(1);
  return fetch.fetchPopularJobs().then(data => {
    expect(data.company).toEqual("Hey Jobs");
  });
});
