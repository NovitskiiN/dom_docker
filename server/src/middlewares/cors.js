const cors = require("cors");

module.exports = cors({
  // origin: [
  //   "http://localhost:3000",
  //   "http://localhost:6622",
  //   "http://62.113.98.139:8080",
  //   "http://localhost:5173",
  //   "https://ganadom222.fun",
  //   "http://ganadom222.fun:6622",
  // ],
  origin: true,
  credentials: true,
});
