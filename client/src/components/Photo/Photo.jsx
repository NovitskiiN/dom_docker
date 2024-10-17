import React from "react";
import Webcam from "react-webcam";
import { Buffer } from 'buffer';
import './photo.css'


// const constraints = {
//   facingMode: { exact: "user" },
// };

const videoConstraints = {
    width: 375,
    height: 667,
    facingMode: 'user'
  };

const WebPhoto = () => {
    const webcamRef = React.useRef(null);
    const [imgSrc, setImgSrc] = React.useState(null);
  
    const capture = React.useCallback(() => {
      const imageSrc = webcamRef.current.getScreenshot();
      setImgSrc(imageSrc);
    }, [webcamRef, setImgSrc]);

    const handleSubmit = () => {
      try {

       const imageSrc = webcamRef.current.getScreenshot();

        // декодирование строки base64 в массив байтов
        const bytes = Buffer.from(imageSrc.split(',')[1], 'base64');
        
        // создание объекта типа Blob
        const blob = new Blob([bytes], {type: 'image/png'});
        
        // создание объекта типа File
        const file = new File([blob], 'image.png', {type: 'image/png'});

        const data = new FormData();

        data.append('firstPhoto', file);
          const url = 'http://localhost:6622/api/upload';
          fetch(url, {
            method: 'POST',
            credentials: 'include',
            body: data,
          })
            .then((res) => res.json())
            .then((newdata) => {
              if(newdata.msg === 'file is not uploaded') {
                alert('file is not uploaded')
              } else {
              alert('файл загружен')
              }
            });
      } catch (error) {
        console.log(error);
        alert({ message: 'error upload', type: 'error' });
      }
    };
  
    return (
      <>
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
          height={667}
          width={375}
        />
        <button className="btn btn-primary" onClick={capture}>Capture photo</button>
        <button  className="btn btn-primary" onClick={handleSubmit}>Save photo</button>

        {imgSrc && (
          <img
            src={imgSrc} alt='web'
          />
        )}
      </>
    );
  };
  
  export default WebPhoto;