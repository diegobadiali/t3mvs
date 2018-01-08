import React, { Component } from 'react';
import { Grid, Row, Col, PageHeader, Button } from 'react-bootstrap';
import Pasos from '../../components/Pasos/Pasos';
import TableResumen from '../../components/TableResumen/TableResumen';
import InfoTarjetas from '../../components/InfoTarjetas/InfoTarjetas';
import Message from '../../components/Message/Message';
const infotabla = {
  itemList : [{
      id: 1,
      name: 'Samsung Galaxy S8 4G LTE Negro - 32GB',
      price: '$22.000,00',
      pricemensual: '',
      imgURL: 'http://www.movistar.com.ar/documents/10192/14678471/s8.png',
    },
    { 
      id: 3,
      name: 'Plan One 10GB',
      price: '',
      pricemensual: '$899,00',
      imgURL: require('../../assets/img/icon-prepago.png'),
      
    }
  ],
  totals: {
      pricetotal : '$22.000,00',
      pricemensualtotal : '$899,00'  
  }
};
class ResumenCompra extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      infotabla: infotabla
    };
  }
  render() {
    return (
      <div>
      <Pasos currentStep={1}/>
        <Grid>
          <Row>
            <Col sm={12} md={9}>
              <PageHeader>Resumen de la compra</PageHeader>
              <Message text={["El dispositivo seleccionado no se encuentra en stock en este momento. Por favor, seleccioná otro dispositivo. ", <br className="visible-lg" />, "Muchas gracias."]} class={"info-plan"}/>
              <div className="cont-btn pull-right"><Button bsStyle="success">Ir a la tienda</Button></div>
            </Col>
          </Row>
        </Grid>
      </div>
      );
  }
}
export default ResumenCompra;