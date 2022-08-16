const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    ["/api/posts"],
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
};
