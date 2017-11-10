import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
class VerazUnverified6 extends Component {
  handleClick = (event) => {
    alert('A locales!');
  };
  render() {
    return (
      <div className="cont-preguntas msg-error text-center">
        <h2>Algunos de los datos ingresados son inválidos.</h2>
        <p>Por favor verificalos y volvé a intentar.</p>
          <Button bsStyle="success" onClick={this.handleClick}>Verificar datos</Button>
      </div>
    );
  }
}
export default VerazUnverified6;