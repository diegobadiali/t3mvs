import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
class VerazUnverified10 extends Component {
  handleClick = (event) => {
    alert('Volver!');
  };
  render() {
    return (
      <div className="cont-preguntas msg-error text-center">
        <h2>¡Uy! Tenemos un problema.</h2>
        <p>Por favor volvé a intentarlo más tarde.</p>
          <Button bsStyle="success" onClick={this.handleClick}>Volver al inicio</Button>
      </div>
    );
  }
}
export default VerazUnverified10;