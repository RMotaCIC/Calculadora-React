import React from "react";
import '../styles/Pantalla.css';

// Otra forma de definir componentes de función: Arrow Functions.
const Pantalla = ({ input }) => {
  return (
    <div className='input'>
      {input}
    </div>
  );
}

export default Pantalla;
