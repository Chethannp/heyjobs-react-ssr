module.exports = {
  apis: [
    {
      url: `/repositories`,
      path: "./job-list",
      method: "get",
      proxy: false,
      proxyUrl: "https://www.production.com"
    }
  ]
};
