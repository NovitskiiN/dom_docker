const cors = require("cors");

module.exports = cors({
  origin: [
    "http://localhost:3000",
    "http://62.113.98.139:8080",
    "http://localhost:5173",
    "https://ganadom222",
    "http://ganadom222",
  ],
  // origin: true,
  credentials: true,
});
