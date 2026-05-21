import './App.css';
import freeCodeCampLogo from './img/freecodecamp-logo.png';
import Boton from './components/Boton.js';
import Pantalla from './components/Pantalla.js';
import BotonClear from './components/BotonClear.js';

function App() {
  return (
    <div className= 'App'>
      
      <div className= 'freecodecamp-logo-contenedor'>
        <img 
        src={freeCodeCampLogo}
        className= 'freecodecamp-logo'
        alt='Logo de FreeCodeCamp' />
      </div>

      <div className='contenedor-calculadora'>
        <Pantalla />
        <div className='fila'>
          {/* Props children */}
          <Boton>1</Boton>
          <Boton>2</Boton>
          <Boton>3</Boton>
          <Boton>+</Boton>
        </div>

        <div className='fila'>
          <Boton>4</Boton>
          <Boton>5</Boton>
          <Boton>6</Boton>
          <Boton>-</Boton>
        </div>

        <div className='fila'>
          <Boton>7</Boton>
          <Boton>8</Boton>
          <Boton>9</Boton>
          <Boton>*</Boton>
        </div>

        <div className='fila'>
          <Boton>=</Boton>
          <Boton>0</Boton>
          <Boton>.</Boton>
          <Boton>/</Boton>
        </div>

        <div className='fila'>
          <BotonClear>Clear</BotonClear>
        </div>
      </div>

    </div>
  );
}

export default App;
