const express = require("express");

const app = express();
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({
    service: "notification_service",
    status: "UP"
  });
});

module.exports = app;