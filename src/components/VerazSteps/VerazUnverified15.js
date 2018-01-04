import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
class VerazUnverified15 extends Component {
  handleClick = (event) => {
    alert('A locales!');
  };
  render() {
    return (
      <div className="cont-preguntas msg-error text-center">
        <h2>¡Lo sentimos! Ya alcanzaste la cantidad máxima de líneas prepagas</h2>
        <p>Por favor, seleccioná otro plan disponible para vos o acercarte a un <a href="#">Local Movistar</a></p>
          <Button bsStyle="success" onClick={this.handleClick}>Aceptar</Button>
      </div>
    );
  }
}
export default VerazUnverified15;