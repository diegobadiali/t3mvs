import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
class VerazUnverified13 extends Component {
  handleClick = (event) => {
    alert('Elegir!');
  };
  render() {
    return (
      <div className="cont-preguntas msg-error text-center">
        <h2>¡Lo sentimos! No es posible continuar <br className="hidden-xs" />con el plan elegido</h2>
        <p>Por favor, seleccioná otro plan. Muchas gracias.</p>
          <Button bsStyle="success" onClick={this.handleClick}>Seleccionar otro plan</Button>
      </div>
    );
  }
}
export default VerazUnverified13;