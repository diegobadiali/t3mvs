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
        Acepto los <a className="btn-link" href="http://www.movistar.com.ar/avisos-legales/terminos-y-condiciones/" target="_blank">Terminos y condiciones</a>
        </Checkbox>
        <Checkbox onChange={this.handleCheckedContrato}>
        Acepto el contrato de servicio de Movistar. <a className="btn-link" href="#">Descargar contrato</a>
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