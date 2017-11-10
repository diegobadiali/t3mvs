import React from 'react';
import {Col, Row, FormControl, FormGroup, Checkbox, Button} from 'react-bootstrap';
class BillingAddressResume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Row>
          <Col sm={12}>
            <div className="datos-cargardos">
              <a className="btn btn-link pull-right" onClick={this.props.selectSucursal}>
                <i className="fa fa-pencil"></i>
              </a>
              <ul>
                <li><strong>{this.props.neighborhood}</strong></li>
                <li>
                  {this.props.street + ' ' + this.props.number + (this.props.floor ? this.props.floor : '') + (this.props.apartment ? this.props.apartment : '')}
                </li>
                <li><small>{this.props.horario}</small></li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
export default BillingAddressResume;