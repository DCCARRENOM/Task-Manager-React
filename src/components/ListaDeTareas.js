import React, {useState} from "react";
import TareaForm from '../components/TareaForm';
import Tarea from '../components/Tarea';
import '../styles/ListaDeTareas.css';

function ListaDeTareas() {

  const [tareas, setTareas] = useState([]);

  const agregarTarea = (tarea) => {
    if(tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
  };

  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  const completarTarea = (id) => {
    const tareasActualizadas = tareas.map(tarea => {
      if(tarea.id === id){
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  };

  return(
    <>
      <TareaForm onSubmit={agregarTarea}/>
      <div className='tareas-lista-contenedor'>
        {
          tareas.map((tarea) =>
            <Tarea
              key={tarea.id} /* para que react diferencia una tarea de otra y no se vayan a cambiar de orden*/
              id={tarea.id}  
              texto={tarea.texto} 
              completada={tarea.completada} 
              completarTarea={completarTarea}
              eliminarTarea ={eliminarTarea}
            />
          )
        }
      </div>
    </>
  );
}

export default ListaDeTareas;