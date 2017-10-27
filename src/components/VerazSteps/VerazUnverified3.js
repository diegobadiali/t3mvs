import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
class VerazUnverified3 extends Component {
  handleClick = (event) => {
    alert('Responder las preguntas');
  };
  render() {
    return (
      <div className="cont-preguntas msg-error text-center">
        <h2>¡Uy! No fue posible validar tu identidad</h2>
          <p>Podés intentar 2 veces más, luego sólo podrás continuar tu compra en<br />un <a href="#">Local Movistar</a>.</p>
          <Button bsStyle="success" onClick={this.handleClick}>Responder las preguntas</Button>
          <p className="light">Quedan 2 intentos</p>
      </div>
    );
  }
}
export default VerazUnverified3;