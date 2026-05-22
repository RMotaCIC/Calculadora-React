import './App.css';
import freeCodeCampLogo from './img/freecodecamp-logo.png';
import Boton from './components/Boton.js';
import Pantalla from './components/Pantalla.js';
import BotonClear from './components/BotonClear.js';
// Importamos el hook useState
import { useState } from 'react';
// Importamos la librería 'mathjs' para poder usar la función "evaluate()" 
import { evaluate } from 'mathjs';

function App() {
  // Usamos el hook con la variable 'input' y la función 'setInput'. El estado inicial de la varibale 'input' lo declaramos con un string vacío.
  const [input, setInput] = useState('');

  // Función que usamos para trabajar con el estado del componente que deseamos manipular
  const agregarInput = valor => {
    setInput(input + valor);
  };

  // Esta función calcula el resultado mediante condicionales. Si el input es true (si hay valores en la pantalla) usará la función "evaluate()" para hacer las operaciones de lugar, si no, y la pantalla está vacía, manda un "alert()" pidiendo al usuario que ingrese un valor.
  function calcularResultado() {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Por favor ingrese valores para poder realizar los cálculos.");
    }
  }

  return (
    <div className= 'App'>
      
      <div className= 'freecodecamp-logo-contenedor'>
        <img 
        src={freeCodeCampLogo}
        className= 'freecodecamp-logo'
        alt='Logo de FreeCodeCamp' />
      </div>

      <div className='contenedor-calculadora'>
        <Pantalla input={input} />
        <div className='fila'>
          {/* Props children */}
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>

        <div className='fila'>
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>

        <div className='fila'>
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>

        <div className='fila'>
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>

        <div className='fila'>
          {/* Otra forma de asignar funciones que trabajen con los Hooks ("useState") es de la siguiente forma: declarándola como una función anónima dentro de las propiedades del componente. */}
          <BotonClear manejarClear={() => setInput('')}>Clear</BotonClear>
        </div>
      </div>

    </div>
  );
}

export default App;
