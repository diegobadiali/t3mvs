import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
class VerazUnverified5 extends Component {
  handleClick = (event) => {
    alert('A locales!');
  };
  render() {
    return (
      <div className="cont-preguntas msg-error text-center">
        <h2>La dirección ingresada no es válida</h2>
          <Button bsStyle="success" onClick={this.handleClick}>Modificar dirección</Button>
      </div>
    );
  }
}
export default VerazUnverified5;