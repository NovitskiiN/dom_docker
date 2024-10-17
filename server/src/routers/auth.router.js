/* eslint-disable camelcase */
/* eslint-disable consistent-return */
const router = require('express').Router();
const createMessage = require('../services/nodemailer.sender.js')
const mailer = require('../services/nodemailer.config.js')

function generatePassword(){
	const length = 8,
	charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
	let res = '';
	for (let i = 0, n = charset.length; i < length; ++i) {
		res += charset.charAt(Math.floor(Math.random() * n));
	}
	return res;
}


const { User } = require('../../db/models');

router.get('/', (req, res) => {
  res.json({ user: req.session.user || null });
});

router.post('/signup', async (req, res) => {
  try {
    const {
      email, name, checked
    } = req.body;

    const findUser = await User.findOne({ where: { email } });

   if (findUser) {
      res.send({ msg: 'this email is already exist' });
    } 
    else {
      const password = generatePassword()
      const createUser = await User.create({
         name, email, password
      });
      const newUser = createUser.get();
      delete newUser.createdAt;
      delete newUser.updatedAt;

      const message = createMessage(name, email, password);
      mailer(message);

      return res.send({ msg: 'you are registrated' });
    }
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
});

router.post('/signin', async (req, res) => {
  try {
    const { password, email } = req.body;

    const findUser = await User.findOne({ where: { email } });

    if (!findUser) {
      return res.json({ msg: 'Wrong login' });
    }
     else {
      const comparePassword = findUser.password === password;
      if (comparePassword) {
        delete findUser.password;
        delete findUser.createdAt;
        delete findUser.updatedAt;
        req.session.user = findUser;
        return res.json(findUser);
      }
      if (!comparePassword && findUser) {
        return res.json({ msg: 'Wrong pass' });
      }
    }
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
});

router.get('/signout', (req, res) => {
  req.session.destroy();
  res.clearCookie('userSession');
  res.sendStatus(200);
});

module.exports = router;
