import logo from './images/calendario.png';
import './App.css';
import ListaDeTareas from './components/ListaDeTareas';

function App() {
  return (
    <div className="App-tareas">
      <div className='logo-container'>
        <img src={logo} className='logo'/>
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
