const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "ws://localhost:3000",
      ws: true,
      changeOrigin: true,
    })
  );
};
