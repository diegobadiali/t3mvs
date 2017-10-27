import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
class VerazUnverified2 extends Component {
  handleClick = (event) => {
    alert('A locales!');
  };
  render() {
    return (
      <div className="cont-preguntas msg-error text-center">
        <h2>¡Uy! No es posible avanzar con tu pedido online</h2>
          <p>Para poder realizar una nueva compra, tenés que validar tu identidad,<br />con DNI, en un <a href="#">Local Movistar</a>.</p>
          <Button bsStyle="success" onClick={this.handleClick}>Ver Locales Movistar</Button>
      </div>
    );
  }
}
export default VerazUnverified2;