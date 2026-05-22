import React from 'react';
import '../styles/Boton.css';

function Boton(props) {

  const esOperador = valor => {
    return  isNaN(valor) && (valor !== ".") && (valor !== '=');
  };

  return (
    // Se agregó la función ".trim()" para que el componente cuando no tenga la clase de operador, no salga en el navegador con un espacio al final. También usamos un operador ternario, que compara el resultado de la función "esOperador" que lleva "props.children" como parámetro.
      <div className={`boton-contenedor ${esOperador(props.children) ? 'operador' : null}`.trimEnd()} 
      // A la función "onClick" le pasamos el "props.manejarClick()" que es una función con "props.children" como parámetro nuevamente. En este caso, para que la función trabaje correctamente, hay que agregarle la sintaxis de arrow function al incio. Esto nos indica que dentro de la función "onClick" hay una función que corre otra función. Sin esto la función se correría apenas se cargara la página.
      onClick={() => props.manejarClick(props.children)}>
        {props.children}
      </div>
  );

  // Otra alternativa al código anterior usando condicionales
  // if (esOperador(props.children)) {
  //   return (
  //     <div className='boton-contenedor operador' 
  //     onClick={() => props.manejarClick(props.children)}>
  //       {props.children}
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div className='boton-contenedor' 
  //     onClick={() => props.manejarClick(props.children)}>
  //       {props.children}
  //     </div>
  //   );
  // }
}

export default Boton;
