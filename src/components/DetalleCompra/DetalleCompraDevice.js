import React from 'react';
import './DetalleCompra.css';
import { Row, Col } from 'react-bootstrap';
class DetalleCompraDevice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
  	return (
      <Row>
          <Col sm={6} className="br">
            <Row>
              <Col xs={3}>
                <img className="Foto" src={this.props.device.imgURL} alt={this.props.device.name} />
              </Col>
              <Col xs={9}>
                <span className="title">Equipo</span>
                <span className="name">{this.props.device.name}<br />{this.props.device.desc}</span>
                
              </Col>
            </Row>
          </Col>
          <Col sm={6}>
            <span className="title">en 18 cuotas de</span>
            <span className="price">{this.props.device.cuotas}</span>
            <span className="title">TOTAL</span>
            <span className="price">{this.props.device.price}</span>
          </Col>
        </Row>
		);
  }
}
export default DetalleCompraDevice;
