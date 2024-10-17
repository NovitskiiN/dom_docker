import React, {useState} from 'react';
import './varification.css';
import { searchQuestion, searchIcon } from '../../icons';
import Documents from '../Documents/Documents';
import WebPhoto from '../Photo/Photo';


export const Verificacion = () => {

const [document, setDocument] = useState(false)

  return (
    <div className='var__container'>
      <div className='var__container__left'>    
        <div>{searchIcon()}</div>
        <p>Nosotros y nuestros socios valoramos las opiniones 
        únicas de nuestros usuarios adultos, por lo que KYC es 
        requerido. No te preocupes, los datos personales solo son 
        necesarios para confirmar la edad y la singularidad del 
        usuario. Todos los datos están estrictamente protegidos 
        y no se comparten con terceros, incluidos nuestros socios.</p>
        <p>Para pasar la verificación hay que tomar fotos de uno de los
         documentos de ambos lados, grabar un video corto y cargarlo.</p>
        <p> Para la verificación se puede usar <strong>DNI, NIE </strong>
        o <strong>licencia de conducir </strong> emitidos en España.</p>
        {!document && <button className="btn btn-primary btn-lg mt-4 mb-4" type="button" onClick={()=>setDocument(true)}>Empezar</button>}
      </div>
      <div className='var__container__right'>
        {/* {document ? <Documents/> : searchQuestion()} */}
        {document ? <WebPhoto/> : <div id='searchQuestion'>{searchQuestion()}</div>}

      </div>    
    </div>
  )
}





