import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
class VerazUnverified12 extends Component {
  handleClick = (event) => {
    alert('Elegir!');
  };
  render() {
    return (
      <div className="cont-preguntas msg-error text-center">
        <h2>Según nuestras validaciones este plan <br className="hidden-xs"/>no está disponible para vos</h2>
        <p>Elegí otro entre los planes seleccionados para vos.</p>
          <Button bsStyle="success" onClick={this.handleClick}>Elegir otro plan</Button>
      </div>
    );
  }
}
export default VerazUnverified12;