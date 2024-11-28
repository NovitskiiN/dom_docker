/* eslint-disable no-unused-vars */

require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const http = require("http");
const path = require("path");

const sessionParser = require("./src/middlewares/sessions");
const cors = require("./src/middlewares/cors");
const errorHandler = require("./src/middlewares/error");

const BaseRouter = require("./src/routers/api");

const app = express();

const PORT = process.env.PORT || 6622;

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/images", express.static("images"));
app.use(cors);
app.use(sessionParser);

app.use("/api", BaseRouter);

const server = http.createServer(app);

app.use(express.static(path.join(__dirname, "dist")));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

server.listen(PORT, () => {
  console.log(`Server is up on ${PORT}`);
});

// require("dotenv").config();

// const express = require("express");
// const morgan = require("morgan");
// const http = require("http");
// const https = require("https");
// const fs = require("fs");
// const path = require("path");

// const sessionParser = require("./src/middlewares/sessions");
// const cors = require("./src/middlewares/cors");
// const errorHandler = require("./src/middlewares/error");

// const BaseRouter = require("./src/routers/api");

// const app = express();

// const PORT_HTTP = 80; // Порт для HTTP
// const PORT_HTTPS = process.env.PORT || 6622; // Порт для HTTPS

// // Загрузка SSL-сертификатов
// const sslOptions = {
//   key: fs.readFileSync("etc/letsencrypt/live/ganadom222.fun/private.key"), // Укажите путь к вашему приватному ключу
//   cert: fs.readFileSync("etc/letsencrypt/live/ganadom222.fun/certificate.crt"), // Укажите путь к вашему сертификату
// };

// app.use(morgan("dev"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use("/images", express.static("images"));
// app.use(cors);
// app.use(sessionParser);

// app.use("/api", BaseRouter);

// app.use(express.static(path.join(__dirname, "dist")));
// app.get("/*", (req, res) => {
//   res.sendFile(path.join(__dirname, "dist", "index.html"));
// });

// // Создание HTTP-сервера для перенаправления на HTTPS
// const httpServer = http.createServer((req, res) => {
//   res.writeHead(301, { Location: `https://${req.headers.host}${req.url}` });
//   res.end();
// });

// // Создание HTTPS-сервера
// const httpsServer = https.createServer(sslOptions, app);

// // Запуск серверов
// httpServer.listen(PORT_HTTP, () => {
//   console.log(
//     `HTTP Server is listening on port ${PORT_HTTP} and redirecting to HTTPS`
//   );
// });

// httpsServer.listen(PORT_HTTPS, () => {
//   console.log(`HTTPS Server is up on port ${PORT_HTTPS}`);
// });
