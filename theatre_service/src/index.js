require("dotenv").config();
const app = require("./app");

const PORT = process.env.PORT || 3009;

app.listen(PORT, () => {
  console.log(`🎬 Theatre Service running on port ${PORT}`);
});
