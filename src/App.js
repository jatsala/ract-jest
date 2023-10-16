import { useState } from 'react';
import './App.css';
import ListadoNotas from './components/ListadoNotas';
import InputNuevaNota from './components/inputNuevaNota';

function App() {

  const [notas, setNotas] = useState(["hacer la compra"]);

  const addNuevaNota = (nuevaNota) => {
    setNotas([...notas, nuevaNota])
  }

  return (
    <div className="App">
      <h1>Bienvenid@ a la sesión número 11</h1>
      <h3>Esto va a ser una (otra) aplicación de notas</h3>
      <InputNuevaNota addNuevaNota={addNuevaNota} />
      <ListadoNotas notas={notas} />
    </div>
  );
}

export default App;
