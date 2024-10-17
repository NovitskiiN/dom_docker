import React from 'react'
import './faq.css'

// import Webcam from "react-webcam";


// window.onload = function() {
//   AdapterJS.webRTCReady(function(isUsingPlugin) {
//       // The WebRTC API is ready.
//       //isUsingPlugin: true is the WebRTC plugin is being used, false otherwise
//       getUserMedia({video: true, audio: true}, function(stream) {
//           // Success callback - do something with the stream
//       }, function(error) {
//           // Error callback - handle the error
//       });
//   });
// }; 


// const WebcamStreamCapture = () => {

//   const stream = document.querySelector("#root").addEventListener( 
//     'click', async function () { 

//         let features = { 
//             audio: true, 
//             video: { 
//                 width: { ideal: 1800 }, 
//                 height: { ideal: 900 } 
//             } 
//         }; 


//         let display = await navigator.mediaDevices 
//             .getUserMedia(features); 

//         // Returns a sequence of MediaStreamTrack objects  
//         // representing the video tracks in the stream 

//         let settings = display.getVideoTracks()[0] 
//             .getSettings(); 

//         let width = settings.width; 
//         let height = settings.height; 

//         console.log('Actual width of the camera video: ' 
//             + width + 'px'); 
//         console.log('Actual height of the camera video:' 
//             + height + 'px'); 
//     }); 

//   const webcamRef = React.useRef(null);
//   const mediaRecorderRef = React.useRef(null);
//   const [capturing, setCapturing] = React.useState(false);
//   const [recordedChunks, setRecordedChunks] = React.useState([]);

//   const handleStartCaptureClick = React.useCallback(() => {
//     setCapturing(true);
//     mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
//       mimeType: "video/webm"
//     });
//     mediaRecorderRef.current.addEventListener(
//       "dataavailable",
//       handleDataAvailable
//     );
//     mediaRecorderRef.current.start();
//   }, [webcamRef, setCapturing, mediaRecorderRef]);

//   const handleDataAvailable = React.useCallback(
//     ({ data }) => {
//       if (data.size > 0) {
//         setRecordedChunks((prev) => prev.concat(data));
//       }
//     },
//     [setRecordedChunks]
//   );

//   const handleStopCaptureClick = React.useCallback(() => {
//     mediaRecorderRef.current.stop();
//     setCapturing(false);
//   }, [mediaRecorderRef, webcamRef, setCapturing]);

//   const handleDownload = React.useCallback(() => {
//     if (recordedChunks.length) {
//       const blob = new Blob(recordedChunks, {
//         type: "video/webm"
//       });
//       const url = URL.createObjectURL(blob);
//       const a = document.createElement("a");
//       document.body.appendChild(a);
//       a.style = "display: none";
//       a.href = url;
//       a.download = "react-webcam-stream-capture.webm";
//       a.click();
//       window.URL.revokeObjectURL(url);
//       setRecordedChunks([]);
//     }
//   }, [recordedChunks]);

//   return (
//     <>
//       <Webcam audio={false} ref={webcamRef} />
//       <button id='start'>start</button>
      
//       {capturing ? (
//         <button onClick={handleStopCaptureClick}>Stop Capture</button>
//       ) : (
//         <button onClick={handleStartCaptureClick}>Start Capture</button>
//       )}
//       {recordedChunks.length > 0 && (
//         <button onClick={handleDownload}>Download</button>
//       )}
//     </>
//   );
// };


const Faq = () => {
  return (
    <div className='faq__container'>
        <div className="accordion accordion-flush" id="accordion">

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    <p className='fs-5 fw-medium'>¿Cómo funciona eso?</p>  
                </button>
              </h2>
              <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body fw-light fs-6">Las compañías de investigación nos encargan encuestas y preguntas, y buscamos respuestas a ellas. Para hacer esto, invitamos a los encuestados (es decir, a ti) a registrarse y responder a las encuestas. Y como compensación por tu tiempo, ofrecemos una recompensa en efectivo.</div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    <p className='fs-5 fw-medium'>¿Cuánto puedo ganar?</p>  
                </button>
              </h2>
              <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body fw-light fs-6">Ten en cuenta que esta no es una oportunidad básica para hacer dinero. Te recomendamos que consideres esto como una oportunidad para responder ocasionalmente a encuestas y recibir una pequeña recompensa por hacerlo. El primer bono de 25 euros puedes obtener por el registro y la verificación ¡el mismo día!</div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    <p className='fs-5 fw-medium'>¿Por qué necesito hacer la verificación?</p>  
                </button>
              </h2>
              <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body fw-light fs-6">Nosotros y nuestros socios valoramos las opiniones únicas de nuestros usuarios adultos, por lo que KYC es requerido. No te preocupes, los datos personales solo son necesarios para confirmar la edad y la singularidad del usuario. Todos los datos están estrictamente protegidos y no se comparten con terceros, incluidos nuestros socios.</div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                    <p className='fs-5 fw-medium'>¿Desde qué países puedo participar?</p>  
                </button>
              </h2>
              <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body fw-light fs-6">
                      Hasta ahora, sólo desde España. Estamos trabajando para expandirnos a otros países.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                    <p className='fs-5 fw-medium'>¿Cómo recibiré invitaciones para realizar encuestas?</p>  
                </button>
              </h2>
              <div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body fw-light fs-6">De forma predeterminada, enviamos invitaciones al correo, te recomendamos que habilites las notificaciones.</div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                    <p className='fs-5 fw-medium'>¿Cómo empiezo?</p>  
                </button>
              </h2>
              <div id="flush-collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body fw-light fs-6">Para comenzar, regístrate y pasa la verificación. De esta manera, podemos buscar encuestas más precisas para ti.</div>
              </div>
            </div>


            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                    <p className='fs-5 fw-medium'>No encontré una respuesta a mi pregunta. ¿Puedo ponerme en contacto con el soporte?</p>  
                </button>
              </h2>
              <div id="flush-collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body fw-light fs-6">¡Claro! Si tienes alguna pregunta, ve a la pestaña Soporte en el sitio, donde puedes enviar tu pregunta a través del formulario y te responderemos por email dentro de las 24 horas. También puedes contactarnos en WhatsApp o Telegram.</div>
              </div>
            </div>


        </div>    
        {/* {WebcamStreamCapture()} */}
    </div>
  )
}

export default Faq

