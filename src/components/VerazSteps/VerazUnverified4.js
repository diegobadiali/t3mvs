import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
class VerazUnverified4 extends Component {
  handleClick = (event) => {
    alert('A locales!');
  };
  render() {
    return (
      <div className="cont-preguntas msg-error text-center">
        <h2>¡Uy! Tenemos un problema</h2>
          <p><strong>El correo tiene inconvenientes para realizar entregas en la zona.</strong><br/>Podés hacer tu equipo y retirarlo en un Centro Movistar más cercano a tu domicilio.</p>
          <Button bsStyle="success" onClick={this.handleClick}>Retirar en un Centro Movistar</Button>
      </div>
    );
  }
}
export default VerazUnverified4;