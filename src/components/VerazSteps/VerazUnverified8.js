import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
class VerazUnverified8 extends Component {
  handleClick = (event) => {
    alert('A locales!');
  };
  render() {
    return (
      <div className="cont-preguntas msg-error text-center">
        <h2>No podemos enviar el equipo a esa dirección.</h2>
        <p>Por favor, ingresa una dirección distinta.</p>
          <Button bsStyle="success" onClick={this.handleClick}>Modificar</Button>
      </div>
    );
  }
}
export default VerazUnverified8;