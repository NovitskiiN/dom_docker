// /* eslint-disable camelcase */
// const uploadRouter = require('express').Router();

// const { Document } = require('../../db/models');
// const fileMiddleware = require('../middlewares/file');

// uploadRouter.get('/getdocs', async (req, res) => {
//   const { id } = req.session.user;
//   try {
//     // { where: { worker_id: Number(id) } }
//     const allDocs = await Document.findAll({ where: { user_id: Number(id) } });
//     res.json(allDocs);
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({ msg: error.message });
//   }
// });

// uploadRouter.delete('/deletedoc', async (req, res) => {
//   const { id } = req.body;

//   try {
//     const deleteDoc = await Document.destroy({ where: { id } });
//     res.json(id);
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({ msg: error.message });
//   }
// });

// uploadRouter.post('/upload', fileMiddleware.single('firstPhoto'), async (req, res) => {
//   try {

//     const { id } = req.session.user;

//     const createFile = await Document.create({
//       file: req.file?.path, user_id:id
//     });
//      createFile?.dataValues?.file ? res.json(createFile) : res.json({msg:'file is not uploaded'})
//   } catch (error) {
//     res.sendStatus(400);
//   }
// });

// module.exports = uploadRouter;
