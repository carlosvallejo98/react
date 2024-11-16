import React, { Component } from 'react';

class MostrarDatos extends Component {
  render() {
    const { datos } = this.props;
    return (
      <div>
        <h2>Datos Ingresados:</h2>
        {datos.length > 0 ? (
          datos.map((item, index) => (
            <div key={index}>
              <p>Nombre: {item.nombre}</p>
              <p>Email: {item.email}</p>
            </div>
          ))
        ) : (
          <p>No se han ingresado datos.</p>
        )}
      </div>
    );
  }
}

export default MostrarDatos;