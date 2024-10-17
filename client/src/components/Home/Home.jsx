import React from 'react';
import './home.css';
import { NavLink } from 'react-router-dom';
import { mountain } from '../../icons';


export const Home = () => {
  return (
    <div className='home__container'>
      <div className='home__container__left'>    
        <div className='home__star'>✨</div>
        <div className='home__title'>
        <h1>Responda<br/>
        encuestas<br/>
        simples y gana</h1>
        <p>¡Marcas están dispuestas a pagar por tu opinión!</p>
        </div>
        <NavLink className="btn btn-primary btn-lg mt-4 mb-4 home_bnt" to="/signup" role="button">Registrarse</NavLink>
        <p className="text-primary-emphasis fs-4 fw-bold">¡Bono 25€ por el registro!</p>
        <p className='text-primary-emphasis fs-6'>*Verificación requerida</p>
      </div>
      <div className='home__container__right'>
        {mountain()}
      </div>    
    </div>
  )
}





