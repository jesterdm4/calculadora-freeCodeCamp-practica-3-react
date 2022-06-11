import React from 'react';

//aqui esta el codigo al que se le hace refrencia en la pregunta numero 7
const Boton = (props) => {

    const esOperador = valor => {
        return isNaN(valor) && valor !== '.' && valor !== '=';
    };

    return (
        <div 
        className={`boton-contenedor ${esOperador(props.children) ? "operador" : ""}`.trim()} 
        onClick={() => props.manejarClic(props.children)}
        >
            {props.children}
        </div>
    );
}

export default Boton;