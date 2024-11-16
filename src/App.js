import React, { useState } from 'react';
import Encabezado from './components/Encabezado/Encabezado';
import Formulario from './components/Formulario /Formulario';
import MostrarDatos from './components/MostrarDatos/MostrarDatos';

const App = () => {
  const [datos, setDatos] = useState([]); // Cambiar a una lista ; es un ejemplo si no funciona pregunrta en ebac 

  const manejarDatosSubmit = (nuevosDatos) => {
    setDatos(prevDatos => [...prevDatos, nuevosDatos]); // Agregar nuevos datos recurdalo 
  };

  return (
    <div>
      <Encabezado />
      <Formulario onDatosSubmit={manejarDatosSubmit} />
      <MostrarDatos datos={datos} />
    </div>
  );
};

export default App;