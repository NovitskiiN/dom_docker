// import React, { useEffect } from 'react';
// import adapter from 'webrtc-adapter';

// const CameraComponent = () => {
//   useEffect(() => {
//     const startCamera = async () => {
//       // Инициализация адаптера
//       await adapter.init();

//       // Получение доступа к задней камере
//       const camera = await adapter.getBackCamera();

//       // Создание потока для получения фотографии
//       const stream = await camera.createStream();

//       // Получение фотографии из потока
//       const photo = await adapter.getPhotoFromStream(stream);

//       // Обработка полученной фотографии
//       console.log(photo);
//     };

//     startCamera();
//   }, []);

//   return <div>Camera component</div>;
// };

// export default CameraComponent;