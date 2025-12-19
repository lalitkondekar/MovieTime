const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", require("./routes/auth.routes"));

app.get("/health", (req, res) => {
  res.json({
    service: "auth_service",
    status: "UP"
  });
});

module.exports = app;