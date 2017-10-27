import React, { Component } from 'react';
import './ResumenCompra.css';
import { Grid, Row, Col, PageHeader } from 'react-bootstrap';
import Pasos from '../../components/Pasos/Pasos';
import TableResumen from '../../components/TableResumen/TableResumen';
import InfoTarjetas from '../../components/InfoTarjetas/InfoTarjetas';
class ResumenCompra extends Component {  
  render() {
    return (
      <div>
      <Pasos currentStep={1}/>
        <Grid>
          <Row>
            <Col sm={12} md={9}>
              <PageHeader>Resumen de la compra</PageHeader>
              <TableResumen />
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