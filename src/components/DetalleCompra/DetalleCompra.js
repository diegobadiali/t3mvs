import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import DetalleCompraDevicePlan from './DetalleCompraDevicePlan';
import DetalleCompraDevice from './DetalleCompraDevice';
import DetalleCompraPlan from './DetalleCompraPlan';
import Entrega from './Entrega';
function Plan(props) {
  let planInfo = null;
  if (props.plan.name !== null && props.device.name !== null) {
    planInfo = (
      <DetalleCompraDevicePlan device={props.device} plan={props.plan} efectivo={props.efectivo}/>
    );
  } else {
  if (props.plan.name === null && props.device.name !== null) {
    planInfo = (
      <DetalleCompraDevice device={props.device} efectivo={props.efectivo}/>
    );
  } 
  if (props.plan.name !== null && props.device.name === null) {
    planInfo = (
      <DetalleCompraPlan plan={props.plan} linea={props.linea}/>
    );
  }
}
  return planInfo;
}
class DetalleCompra extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
  	return (
      <Row>
        <Col sm={12}>
  			  <div className="detalle-compra">
            <h5>Detalle de la compra</h5>
            <Plan {...this.props.cart} efectivo={this.props.efectivo}/>
            <Entrega {...this.props.cart}/>
          </div>
        </Col>
        <Col sm={12}>
          <div className="cont-orden">
            <p><strong>Tu número de orden es {this.props.cart.orden}</strong> <br />Te servirá para realizar consultas de tu pedido.<br /> {this.props.efectivo ? (<a href="#" target="_blank">Descargar cupón de pago</a>) : ('')}</p>

            <Button bsStyle="success">Seguir comprando</Button>
          </div>
        </Col>
      </Row>
		);
  }
}
export default DetalleCompra;
