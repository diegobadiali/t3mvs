import React from 'react';
import {FormControl, FormGroup, Button, Radio} from 'react-bootstrap';

class BillingAddressList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="radios-entrega">
      <FormGroup>

        <Radio name="address" value="" onClick={this.props.handleAddress}>
          <h4>{this.props.street + ' ' + this.props.number + ' ' + (this.props.floor ? this.props.floor : '') + (this.props.apartment ? this.props.apartment : '') + ' - ' +this.props.locality + ' - ' + this.props.city}</h4>
        </Radio>

        <Radio name="address" value="" onClick={this.props.handleOtherAddress}>
          <h4>Otro domicilio</h4>
        </Radio>

      </FormGroup>        
      
      </div>
    );
  }
}
export default BillingAddressList;