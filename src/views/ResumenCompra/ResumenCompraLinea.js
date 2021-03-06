import React, { Component } from 'react';
import { Grid, Row, Col, PageHeader } from 'react-bootstrap';
import Pasos from '../../components/Pasos/Pasos';
import TableResumen from '../../components/TableResumen/TableResumen';
import InfoTarjetas from '../../components/InfoTarjetas/InfoTarjetas';
const infotabla = {
  itemList : [{
      id: 1,
      name: 'Plan One 10GB',
      price: '',
      pricemensual: '$899,00',
      imgURL: require('../../assets/img/icon-prepago.png'),
    },
    { 
      id: 2,
      name: 'Chip Generico (apto para todos los equipos)',
      price: '$0,00',
      pricemensual: '',
      imgURL: require('../../assets/img/img-chip2.png'),
    }
  ],
  totals: {
      pricetotal : '$0',
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
              <TableResumen infotabla={this.state.infotabla} />
              <InfoTarjetas />
              <p className="message">Los precios incluyen todos los impuestos. Todos los precios se encuentran expresados en pesos argentinos, con la previa conversión de dólares estadounidenses a pesos argentinos conforme el tipo de cambio del día de la fecha. Al momento de corte de ciclo los mismos se facturarán tomando en cuenta la cotización de dólares estadounidenses del día anterior, según tipo de cambio dispuesto por Banco de la Nación Argentina (BNA).</p>
            </Col>
          </Row>
        </Grid>
      </div>
      );
  }
}
export default ResumenCompra;