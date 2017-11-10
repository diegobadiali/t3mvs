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
              <a className="btn btn-link pull-right" onClick={this.props.handleEditAddress}>
                <i className="fa fa-pencil"></i>
              </a>
              <ul>
                <li>
                  {this.props.street + ' ' + this.props.number + ' ' + (this.props.floor ? this.props.floor : '') + ' ' + (this.props.apartment ? this.props.apartment : '')}
                </li>
                <li>{this.props.locality + ' - ' + this.props.city}</li>
              </ul>
              <p>{this.props.horario}</p>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
export default BillingAddressResume;