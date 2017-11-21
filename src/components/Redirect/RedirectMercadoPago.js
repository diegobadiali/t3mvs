import React, { Component } from 'react';
import spin from './spin.gif';
import logo from './mercadopago.png';
class Redirect extends Component {
  render() {
    return (
    	<div className="redirect">
        <img src={spin} alt="Cargando..." className="spin" />
        <h2>Redireccionando a</h2>
        <img src={logo} alt="MercadoPago" className="logoredirect" />
      </div>
      );
  }
}
export default Redirect;

