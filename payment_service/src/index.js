require("dotenv").config();
const app = require("./app");

const PORT = process.env.PORT || 3011;

app.listen(PORT, () => {
  console.log(`🎬 Payment Service running on port ${PORT}`);
});
