import React, { Component } from 'react';
import { DropdownButton } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
class DropUser extends Component {
  render() {
  	return (
  		<div className="btn-user">
  			<DropdownButton noCaret pullRight id="dropDownUser" title={<i className="icon-mi-movistar"></i>}>
  				<MenuItem header><span className="user-name">{this.props.firstname + ' ' + this.props.lastname}</span></MenuItem>
  				<MenuItem header><Button bsStyle="success">Cerrar sesión <i className="fa fa-power-off"></i></Button></MenuItem>
  			</DropdownButton>
  		</div>
  	);
  }
}
export default DropUser;

