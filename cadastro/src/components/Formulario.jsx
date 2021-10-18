import React from 'react';
import './Formulario.css'

function Formulario(){

  function mensagem(){
    alert("Boas-vindas!!");
  }

  return (
      <div className="container-principal">
          <div className="cabecalho">
            <h3>Cadastro</h3>
            <span>Preencha os dados abaixo para começar.</span>
          </div>
          <div className="nome">
            <input type="text" nome="nome" placeholder="Nome" />
          </div>
          <div className="sobrenome">
          <input type="text" nome="sobrenome" placeholder="Sobrenome" />
          </div>
          <div className="email">
          <input type="email" nome="email" placeholder="E-mail" />
          </div>
          <div className="senha">
            <input type="password" name="senha" placeholder="Senha" />
          </div>
          <button className="botao" onClick={()=>mensagem()}>
            Concluir cadastro
          </button>
      </div>
  );
}

export default Formulario;
