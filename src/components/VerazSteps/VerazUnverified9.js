import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
class VerazUnverified9 extends Component {
  handleClick = (event) => {
    alert('Ir a Mi Movistar!');
  };
  render() {
    return (
      <div className="cont-preguntas msg-error text-center">
        <h2>Detectamos que ya sos cliente Movistar.</h2>
        <p>Para continuar con la compra, por favor ingresá o registrate en Mi Movistar.</p>
          <Button bsStyle="success" onClick={this.handleClick}>Ir a Mi Movistar</Button>
      </div>
    );
  }
}
export default VerazUnverified9;