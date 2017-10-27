import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
class VerazUnverified extends Component {
  handleClick = (event) => {
    alert('A locales!');
  };
  render() {
    return (
      <div className="cont-preguntas msg-error text-center">
        <h2>¡Uy! La validación de indentidad falló</h2>
          <p>Únicamente podrás continuar tu compra acercándote a un<br /><a href="#">Local Movistar</a> con tu DNI.</p>
          <Button bsStyle="success" onClick={this.handleClick}>Ver Locales Movistar</Button>
      </div>
    );
  }
}
export default VerazUnverified;