require("dotenv").config();
const app = require("./app");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3007;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Auth DB connected");
    app.listen(process.env.PORT, () =>
      console.log(`Auth Service running on ${process.env.PORT}`)
    );
  });

app.listen(PORT, () => {
  console.log(`🎬 Auth Service running on port ${PORT}`);
});
