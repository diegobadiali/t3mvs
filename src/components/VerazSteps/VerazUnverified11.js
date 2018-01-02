import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
class VerazUnverified11 extends Component {
  handleClick = (event) => {
    alert('Volver!');
  };
  render() {
    return (
      <div className="cont-preguntas msg-error text-center">
        <h2>¡Uy! No estamos pudiendo validar tu identidad</h2>
        <p>Por favor, reintentá más tarde.</p>
          <Button bsStyle="success" onClick={this.handleClick}>Volver al inicio</Button>
      </div>
    );
  }
}
export default VerazUnverified11;