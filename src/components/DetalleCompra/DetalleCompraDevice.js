import React from 'react';
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
          {this.props.efectivo ? (
            ''
            ):(
            <div>
              <span className="title">en 18 cuotas de</span>
              <span className="price">{this.props.device.cuotas}</span>
            </div>
            )
          }  
            <span className="title">TOTAL</span>
            <span className="price">{this.props.device.price}</span>
            {this.props.efectivo ? (<a href="#" target="_blank">Descargar cupón de pago <i className="fa fa-angle-right"></i></a>) : ('')}
          </Col>
        </Row>
		);
  }
}
export default DetalleCompraDevice;
