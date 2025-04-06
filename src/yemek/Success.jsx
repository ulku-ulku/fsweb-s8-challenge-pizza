import React from 'react'

import '../styles/Success.css'
import Logo from '../../src/assets/logo.svg'

export default function Home() {
  return (
    <div className='success'>
        <header>
          
          <div style={ { position:'absolute',left:'50%',transform: 'translateX(-50%)',top:125 } }>
            <img className='logo' src={ Logo } alt="logo" />
          </div>
              
          <div style={ { display:'flex',flexDirection:'column',height:'100vh',alignItems:'center',justifyContent:'center' } }>

            <p style={ { textAlign:'center' } } className="slogan">TEBRİKLER!</p>
            <p style={ { textAlign:'center' } } className="slogan">SİPARİŞİNİZ ALINDI!</p>

          </div>

        </header>
    </div>
  )
}
