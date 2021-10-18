import React from 'react';
import logo from '../logo.svg';
import './Imagem.css'

function Imagem() {
  return (
      <div>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2> App React </h2>
        </header>
      </div>
  );
}

export default Imagem;