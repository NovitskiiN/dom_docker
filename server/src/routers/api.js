const BaseRouter = require('express').Router();
const AuthRouter = require('./auth.router');
const fileRouter = require('./upload.router');

// const isAuth = require('../middlewares/isAuth');

BaseRouter.use('/auth', AuthRouter);
// BaseRouter.use('/', fileRouter);

BaseRouter.get('*', (req, res) => {
  res.json({ msg: 'no end point' });
});

module.exports = BaseRouter;
