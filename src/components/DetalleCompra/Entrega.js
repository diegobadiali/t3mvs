import React from 'react';
import { Row, Col } from 'react-bootstrap';
class Entrega extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
  	return (
        <div className="bg-entrega">
          <Row>
            <Col xs={2} sm={3} md={1}>
              <i className={this.props.envio !==undefined ?'fa fa-truck':'' || this.props.retiro !==undefined ?'fa fa-map-marker':''}></i> 
            </Col>
            <Col xs={10} sm={9} md={11}>
                <p><strong>{this.props.envio !==undefined ?'Recibís en:':'' || this.props.retiro !==undefined ?'Retirás en esta sucursal:':''}</strong></p>
                <p>{this.props.envio !==undefined ?this.props.envio.direccion:'' || this.props.retiro !==undefined ?this.props.retiro.direccion:''}</p>
                <small>{this.props.retiro !==undefined ?this.props.retiro.horario:''}</small>
            </Col>
          </Row> 
        </div>
		);
  }
}
export default Entrega;
