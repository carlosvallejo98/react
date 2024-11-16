import React, { Component } from 'react';



class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: '',
      email: ''
    };
  }

  manejarEnvio = (e) => {
    e.preventDefault();
    this.props.onDatosSubmit({ nombre: this.state.nombre, email: this.state.email });
    this.setState({ nombre: '', email: '' });
  }

  manejarCambioNombre = (e) => {
    this.setState({ nombre: e.target.value });
  }

  manejarCambioEmail = (e) => {
    this.setState({ email: e.target.value });
  }

  render() {
    return (
      <form onSubmit={this.manejarEnvio}>
        <input 
          type="text" 
          placeholder="Nombre" 
          value={this.state.nombre} 
          onChange={this.manejarCambioNombre} 
          required
        />
        <input 
          type="email" 
          placeholder="Email" 
          value={this.state.email} 
          onChange={this.manejarCambioEmail} 
          required
        />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default Formulario;