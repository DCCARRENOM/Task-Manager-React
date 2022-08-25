import React, {useState} from "react";
import '../styles/TareaForm.css';
import {v4 as uuidv4} from "uuid";

function TareaForm(props) {

  const [input, setInput] = useState('');

  const manejarCambio = (e) => {
    setInput(e.target.value);
  };
  
  const manejarEnvio = (e) => {
    e.preventDefault(); /*para que no se recargue la pagina al enviar el formulario*/

    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    }
    props.onSubmit(tareaNueva);
  };

  return(
    <form className='tarea-formulario' onSubmit={manejarEnvio}>
      <input 
        className='tarea-input' 
        type='text' 
        placeholder='Escribe una Tarea' 
        name='texto'
        onChange={manejarCambio}
      />
      <button className='tarea-boton'>
        Agregar Tarea</button>
    </form>
  );
}

export default TareaForm;