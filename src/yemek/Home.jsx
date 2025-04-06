import React from 'react'

import '../styles/Home.css'
import Logo from '../../src/assets/logo.svg'

import { useHistory } from 'react-router-dom';

export default function Home() {

  const history = useHistory();
  
  const aciktim = () => {
      history.push('/order-pizza');
  };

  return (
    <div className='home'>
      <header>
          <img className='logo' src={ Logo } alt="logo" />
              
          <p className="slogan">KOD ACIKTIRIR,</p>
          <p className="slogan">PİZZA DOYURUR</p>


          <button onClick={ aciktim } className="btn btn-yellow" style={ { marginTop:15,textAlign:'center' } }>
              ACIKTIM
          </button>
      </header>
    </div>
  )
}