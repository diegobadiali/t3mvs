import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
class VerazUnverified14 extends Component {
  handleClick = (event) => {
    alert('Volver!');
  };
  render() {
    return (
      <div className="cont-preguntas msg-error text-center">
        <h2>¡Lo sentimos!</h2>
        <p>El dispositivo seleccionado no se encuentra en stock en este momento. Por favor, seleccioná otro dispositivo. Muchas gracias.</p>
          <Button bsStyle="success" onClick={this.handleClick}>Volver a la tienda</Button>
      </div>
    );
  }
}
export default VerazUnverified14;