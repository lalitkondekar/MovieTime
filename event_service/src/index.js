require("dotenv").config();
const app = require("./app");

const PORT = process.env.PORT || 3010;

app.listen(PORT, () => {
  console.log(`🎬 Event Service running on port ${PORT}`);
});
