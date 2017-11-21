import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import DetalleCompraDevicePlan from './DetalleCompraDevicePlan';
import DetalleCompraDevice from './DetalleCompraDevice';
import DetalleCompraPlan from './DetalleCompraPlan';
import Entrega from './Entrega';
function Plan(props) {
  let planInfo = null;
  if (props.plan !== undefined && props.device !== undefined) {
    planInfo = (
      <DetalleCompraDevicePlan device={props.device} plan={props.plan}/>
    );
  } else {
  if (props.plan === undefined && props.device !== undefined) {
    planInfo = (
      <DetalleCompraDevice device={props.device}/>
    );
  } 
  if (props.plan !== undefined && props.device === undefined) {
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
            <Plan {...this.props.cart}/>
            <Entrega {...this.props.cart}/>
          </div>
        </Col>
        <Col sm={12}>
          <div className="cont-orden">
            <p><strong>Tu número de orden es {this.props.cart.orden}</strong> <br />Te servirá para realizar consultas de tu pedido.</p>
            <Button bsStyle="success">Seguir comprando</Button>
          </div>
        </Col>
      </Row>
		);
  }
}
export default DetalleCompra;
