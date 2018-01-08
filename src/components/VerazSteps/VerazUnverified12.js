import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
class VerazUnverified12 extends Component {
  handleClick = (event) => {
    alert('Elegir!');
  };
  render() {
    return (
      <div className="cont-preguntas msg-error text-center">
        <h2>¡Lo sentimos! Este plan no está disponible.</h2>
        <p>Para continuar con la compra, por favor elegí otro plan.</p>
          <Button bsStyle="success" onClick={this.handleClick}>Elegir otro plan</Button>
      </div>
    );
  }
}
export default VerazUnverified12;