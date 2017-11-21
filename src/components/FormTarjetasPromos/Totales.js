import React from 'react';
import { Radio, FormGroup, FormControl } from 'react-bootstrap';
class Totales extends React.Component {
  constructor(props){
    super(props);
    this.state = { cuotas: '12', importe: '$2.571,00', cft: '65,03%', total: '$28.000,00' };
  }
   onHandleChange(e){
    switch (this.inputEl.value) {
      case '1':
        this.setState({ cuotas: '12', importe: '$2.571,00', cft: '65,03%', total: '$28.000,00' });
        break;
      case '2':
        this.setState({ cuotas: '6', importe: '$4.234,00', cft: '45,03%', total: '$24.500,00' });
        break;
      case '3':
        this.setState({ cuotas: '1', importe: '$21.000,00', cft: '0%', total: '$21.000,00' });
        break;  
    }
  }
	render() {
		return (
			<div className="foot-form">
          <label>Pagás: 
          <FormGroup controlId="formControlCuotas">
          <FormControl componentClass="select" onChange={this.onHandleChange.bind(this)} inputRef={ el => this.inputEl=el }>
            <option value="1">12</option>
            <option value="2">6</option>
            <option value="3">1</option>
          </FormControl>
          <i className="fa fa-angle-down"></i> 
          </FormGroup>
          x <span className="importe">{ this.state.importe }</span><br className="visible-xs" />
          { this.state.cft==="0%" ? <span className="cft">Sin interés</span> : <span className="cft">CFT: { this.state.cft }</span> }
          
          <span className="total"><b>Total:</b> { this.state.total }{ this.state.cft==="0%" ? '' : <sub> (con intereses)</sub>}</span></label>
        </div>
		);
	}
}
export default Totales;


