import React from 'react';
import '../styles/Boton.css';

function Boton(props) {

  const esOperador = valor => {
    return  isNaN(valor) && (valor !== ".") && (valor !== '=');
  };

  return (
    // Se agregó la función ".trim()" para que el componente cuando no tenga la clase de operador, no salga en el navegador con un espacio al final.
      <div className={`boton-contenedor ${esOperador(props.children) ? 'operador' : null}`.trimEnd()}>
        {props.children}
      </div>
  );
}

export default Boton;
