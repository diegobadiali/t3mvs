import React from 'react';
import { FormControl, FormGroup } from 'react-bootstrap';
class SelectTarjetas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
	render() {
		return (
      <FormGroup controlId="formControlsSelect">
      <FormControl componentClass="select" placeholder="Tarjeta" disabled={!this.props.pagotarjeta == true ? 'disabled': ''}>
        <option disabled selected>Seleccioná una tarjeta</option>
        {this.props.tarjetas.map((item, i) => {
          return(
            <option value={item.value} key={item.id}>{item.name}</option>
        )
      })}
      </FormControl>
        <i className="fa fa-angle-down"></i>
      </FormGroup>    
		);
	}
}
export default SelectTarjetas;