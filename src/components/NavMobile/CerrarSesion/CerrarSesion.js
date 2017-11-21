import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
class CerrarSesion extends Component {
  render() {
    return (
		<Button className="btn">Cerrar sesión <i className="fa fa-power-off"></i></Button>
            );
  }
}
export default CerrarSesion;