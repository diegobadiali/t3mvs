import React from 'react';
import {Button, Checkbox} from 'react-bootstrap';
class Pay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCheckedTerminos: false,
      isCheckedContrato: false
    };
    this.handleCheckedTerminos = this.handleCheckedTerminos.bind(this); 
    this.handleCheckedContrato = this.handleCheckedContrato.bind(this); 
  }
  handleCheckedTerminos () {
    this.setState({isCheckedTerminos: !this.state.isCheckedTerminos});
  }
  handleCheckedContrato () {
    this.setState({isCheckedContrato: !this.state.isCheckedContrato});
  }
  render(){
    return(
      <div>
        <hr/>
        <div className="cont-checkboxs">
        <Checkbox onChange={this.handleCheckedTerminos}>
        Acepto los <Button bsStyle="link">Terminos y condiciones</Button>
        </Checkbox>
        <Checkbox onChange={this.handleCheckedContrato}>
        Acepto el contrato de servicio de Movistar. <Button bsStyle="link">Descargar contrato</Button>
        </Checkbox>

        </div>
        <div className="cont-buttons">
        <div className="pull-left">
        <Button bsStyle="default">Cancelar</Button>
        </div>
        <div className="pull-right">
        <Button bsStyle="success" disabled={this.state.isCheckedTerminos && this.state.isCheckedContrato  ? '' : 'disabled' }>Pagar y Finalizar</Button>
        </div>
        </div>
      </div>
      )
  }
}
export default Pay;  