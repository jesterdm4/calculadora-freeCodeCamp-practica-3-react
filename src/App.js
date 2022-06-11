import './App.css';
import logo from "./imagenes/logo.png";
import Boton from './componentes/Boton.jsx';
import "./hojas-de-estilo/Boton.css";
import Pantalla from './componentes/Pantalla.jsx';
import "./hojas-de-estilo/Pantalla.css";
import BotonClear from './componentes/BotonClear.jsx';
import "./hojas-de-estilo/BotonClear.css";
import { useState } from "react";

function App() {

  const [input, setInput] = useState("");

  const agregarInput = (valor) => {
    setInput(input + valor);
  };

  const limpiarInput = () => {
    setInput("");
  }

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img className='logo' 
          src={logo} 
          alt='logo' 
        />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClic={limpiarInput}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
