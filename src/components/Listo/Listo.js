import React, { Component } from 'react';
import iconty from '../../assets/img/icon-ty.png';
class Listo extends Component {
  render() {
    return (
      <div className="cont-listo">
        <img src={iconty} alt="¡Listo!" />
        <h1>¡Listo!</h1>
        <h2>Tu compra fue realizada con éxito</h2>
        <h3>En breve recibirás un email de confirmación.</h3>
      </div>
      );
  }
}
export default Listo;
