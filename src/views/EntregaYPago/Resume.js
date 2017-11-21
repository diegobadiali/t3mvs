import React from 'react';
import {Col, Row} from 'react-bootstrap';
class Resume extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  handleChange = (event) => {

    this.setState({

    });
  };

  render() {
    return (
      <div className="cont-entrega-pago">
          <div className="datos-cargardos">
            <a className="btn btn-link pull-right" onClick={this.props.handleData}>
                <i className="fa fa-pencil"></i>
            </a>
            <ul>
                <li>
                  {this.props.sucursalData.address.street + ' ' + this.props.sucursalData.address.number + ' ' + (this.props.sucursalData.address.floor ? this.props.sucursalData.address.floor : '') + ' ' + (this.props.sucursalData.address.apartment ? this.props.sucursalData.address.apartment : '')}
                </li>
                <li>{this.props.sucursalData.address.locality + ' - ' + this.props.sucursalData.address.city}</li>
              </ul>
              <p>{this.props.sucursalData.address.horario}</p>
          </div>
      </div>
    );
  }
}
export default Resume;