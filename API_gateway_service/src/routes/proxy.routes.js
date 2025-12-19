const { createProxyMiddleware } = require("http-proxy-middleware");
const authMiddleware = require("../middleware/auth.middleware");

module.exports = (app) => {

  // PUBLIC
  app.use("/api/auth",
    createProxyMiddleware({
      target: "http://localhost:3007",
      changeOrigin: true
    })
  );

  // PROTECTED
  app.use("/api/movies",
    authMiddleware,
    createProxyMiddleware({
      target: "http://localhost:3008",
      changeOrigin: true
    })
  );

  app.use("/api/events",
    authMiddleware,
    createProxyMiddleware({
      target: "http://localhost:3010",
      changeOrigin: true
    })
  );
};
