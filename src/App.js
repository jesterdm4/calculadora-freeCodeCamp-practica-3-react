import './App.css';
import logo from "./imagenes/logo.png";
import Boton from './componentes/Boton.jsx';

function App() {
  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img className='logo' 
          src={logo} 
          alt='logo' 
        />
      </div>
      <div className='contenedor-calculadora'>
        <div className='fila'>
          <Boton>
            7
          </Boton>
        </div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
      </div>
    </div>
  );
}

export default App;
