import React from "react";
import '../styles/Tarea.css';
import { AiOutlineCarryOut } from "react-icons/ai";

function Tarea ({ id, texto, completada, completarTarea, eliminarTarea }) {
  return(
    <div className={completada ? 'tarea-container completada' : 'tarea-container'} >
      <div className='tarea-texto' onClick={() => completarTarea(id)}>
        {texto}
      </div>
      <div className='tarea-iconos-container' onClick={() => eliminarTarea(id)} >
        <AiOutlineCarryOut className='tarea-icono'/>
      </div>
    </div>
  );
}

export default Tarea;