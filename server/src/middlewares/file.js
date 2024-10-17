const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images/');
  },
  filename: (req, file, cb) => {
    // cb(null, Date.now() + path.extname(file.originalname));
    cb(null, `${new Date().toISOString()}-${file.originalname}`);
  },
});

const types = ['image/png', 'image/jpeg', 'image/jpg','video/quicktime', 'application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.documen', 'application/vnd.openxmlformats-officedocument',
  'application/msword', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];
const fileFilter = (req, file, cb) => {
  if (types.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

module.exports = multer({ storage, fileFilter });


// const multer = require('multer');
// // const fs = require('fs');

// // создаем хранилище для загруженных файлов
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/')
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + '-' + Date.now())
//   }
// });

// // создаем экземпляр multer
// // const upload = multer({ storage: storage });
// module.exports = multer({ storage });


// // // обрабатываем запрос на загрузку файла
// // app.post('/upload', upload.single('image'), function (req, res, next) {
// //   // читаем загруженный файл
// //   fs.readFile(req.file.path, function(err, data) {
// //     if (err) throw err;
// //     // преобразуем файл в формат base64
// //     const base64data = new Buffer(data).toString('base64');
// //     // сохраняем данные в базу данных или отправляем клиенту
// //     res.send(base64data);
// //   });
// // });