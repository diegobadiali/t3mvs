import React from 'react';
import { FormControl, FormGroup } from 'react-bootstrap';
class SelectBancos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleChange (){
    this.setState({
      selected: true
    })
  }
  render() {
    return (
      <FormGroup controlId="formControlsSelectBancos" className={this.state.selected ? 'active' : ''}>
        <FormControl componentClass="select" placeholder="Tarjeta" onChange={this.handleChange.bind(this)}>
          <option disabled selected>Banco</option>
            <optgroup label="Hasta 12 cuotas sin interés">
              {this.props.bancos.cuotas12.map((item, i) => {
                return(
                  <option value={item.value} key={item.id}>{item.name}</option>
                    )
                  }
                )
              }
            </optgroup>
            <optgroup label="Hasta 6 cuotas sin interés">
              {this.props.bancos.cuotas6.map((item, i) => {
                return(
                  <option value={item.value} key={item.id}>{item.name}</option>
                    )
                  }
                )
              }
            </optgroup>
            <optgroup label="Hasta 1 cuota sin interés">
              {this.props.bancos.cuotas1.map((item, i) => {
                return(
                  <option value={item.value} key={item.id}>{item.name}</option>
                    )
                  }
                )
              }
            </optgroup>

      </FormControl>
        <i className="fa fa-angle-down"></i>
      </FormGroup>    
    );
  }
}
export default SelectBancos;
