import React from 'react';
import { Row, Col } from 'react-bootstrap';
class DetalleCompraPlan extends React.Component {
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
                <img className="Foto" src={this.props.plan.imgURL} alt={this.props.plan.name} />
              </Col>
              <Col xs={9}>
                <span className="title">{this.props.linea.name}</span>
                <span className="name">{this.props.linea.desc}</span>
                <span className="price">{this.props.linea.price}</span>
              </Col>
            </Row>
          </Col>
          <Col sm={6}>
            <span className="title">Plan</span>
            <span className="name">{this.props.plan.name}</span>
            <span className="price">{this.props.plan.price}</span>
            {this.props.efectivo ? (<a href="#" target="_blank">Descargar cupón de pago <i className="fa fa-angle-right"></i></a>) : ('')}
            <p><strong>Tu primera factura vencerá el {this.props.plan.vencimiento}</strong></p>
            {this.props.plan.onetimecharge ? (
                  <p>Cargo adicional a pagar por única vez en la primer factura: <span className="price1">{this.props.plan.onetimecharge}</span></p>
                  ) : '' }
          </Col>
        </Row>
		);
  }
}
export default DetalleCompraPlan;
