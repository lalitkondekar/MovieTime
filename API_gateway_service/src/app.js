const express = require("express");

const app = express();
app.use(express.json());

require("./routes/proxy.routes")(app);

app.get("/health", (req, res) => {
  res.json({
    service: "API_gateway_service",
    status: "UP"
  });
});

module.exports = app;