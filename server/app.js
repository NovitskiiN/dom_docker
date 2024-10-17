/* eslint-disable no-unused-vars */

require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const http = require('http');

const sessionParser = require('./src/middlewares/sessions');
const cors = require('./src/middlewares/cors');
const errorHandler = require('./src/middlewares/error');

const BaseRouter = require('./src/routers/api');

const app = express();

const PORT = process.env.PORT || 6622;

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/images', express.static('images'));
app.use(cors);
app.use(sessionParser);

app.use('/api', BaseRouter);

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server is up on ${PORT}`);
});
