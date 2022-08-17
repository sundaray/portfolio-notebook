const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    ["/api/posts", "/api/posts/create"],
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
};
