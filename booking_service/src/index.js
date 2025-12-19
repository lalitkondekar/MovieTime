require("dotenv").config();
const app = require("./app");

const PORT = process.env.PORT || 3013;

app.listen(PORT, () => {
  console.log(`🎬 Booking Service running on port ${PORT}`);
});
