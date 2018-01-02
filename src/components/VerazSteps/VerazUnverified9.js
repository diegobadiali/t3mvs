import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
class VerazUnverified9 extends Component {
  handleClick = (event) => {
    alert('Iniciar!');
  };
  render() {
    return (
      <div className="cont-preguntas msg-error text-center">
        <h2>Detectacmos que ya sos cliente Movistar.</h2>
        <p>Por favor, iniciá sesión con tu cuenta.</p>
          <Button bsStyle="success" onClick={this.handleClick}>Iniciá sesión</Button>
      </div>
    );
  }
}
export default VerazUnverified9;