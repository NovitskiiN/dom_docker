import React from 'react';
import './contact.css';

const Contact = () => {
    return (
        <div className="contact__container">
            <div className="contact__form">
                <p>
                    Puedes conectar con nosotros a través del formulario o
                    <br />
                    escribirnos en WhatsApp o Telegram
                </p>
                <div className="contact__icons">
                    <a href="https://api.whatsapp.com/send?phone=34655204617">
                        <img
                            src="https://thumb.tildacdn.com/tild6637-6138-4035-b634-323463613834/-/resize/64x/-/format/webp/whatsapp-256x256.png"
                            alt="whatsapp"
                        />
                    </a>
                    <a href="https://t.me/gana_club">
                        <img
                            src="https://thumb.tildacdn.com/tild3165-6332-4531-a134-373039663464/-/resize/57x/-/format/webp/Untitled-3.png"
                            alt="tg"
                        />
                    </a>
                </div>
                <div className="mb-3">
                    <label htmlFor="contactInput1" className="form-label d-flex justify-content-start">
                        Email al que enviamos la respuesta:
                    </label>
                    <input type="email" className="form-control" id="contactInput1" placeholder="Email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="contactInput2" className="form-label d-flex justify-content-start">
                        Nombre:
                    </label>
                    <input type="text" className="form-control" id="contactInput2" placeholder="Nombre" />
                </div>
                <div className="mb-3">
                    <label htmlFor="formControlTextarea1" className="form-label d-flex justify-content-start">
                        El mensaje:
                    </label>
                    <textarea className="form-control" id="formControlTextarea1" rows="3"></textarea>
                </div>
                <button type="button" className="btn btn-dark btn-lg contact_btn">
                    Enviar
                </button>
            </div>
        </div>
    );
};

export default Contact;
