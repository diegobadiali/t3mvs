import React, { Component } from 'react';
import './Indice.css';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

class Indice extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col sm={12}>
          	<div className="page-header">
          		<h1>Indice</h1>
          	</div>
          	<div className="cont">
          		<ul>
                <li><a href="/elegi-plan-con-linea-nueva" target="_blank">Elegí Plan con línea nueva</a></li>
                <li><a href="/elegi-plan-para-tu-linea" target="_blank">Elegí Plan para tu línea</a></li>
                <li><a href="/resumen-de-compra" target="_blank">Resumen de compra (Equipo)</a></li>
                <li><a href="/resumen-de-compra-equipo" target="_blank">Resumen de compra</a></li>
                <li><a href="/datos-personales/guest" target="_blank">Datos personales y de facturacion (Guest)</a></li>
                <li><a href="/datos-personales/logged" target="_blank">Datos personales y de facturacion (Logged - Cambiar DataStoreSupport.js isGuest[false] )</a></li>
                <li><a href="/thank-you-page" target="_blank">Thank you page</a></li>
                <li><a href="/thank-you-page-plan" target="_blank">Thank you page (Plan)</a></li>
                <li><a href="/thank-you-page-equipo" target="_blank">Thank you page (Equipo)</a></li>
                <li><a href="/entrega-y-pago/guest" target="_blank">Entrega y pago (Guest)</a></li>
                <li><a href="/entrega-y-pago/logged" target="_blank">Entrega y pago (Logged)</a></li>
                <li><a href="/mercadopago" target="_blank">MercadoPago</a></li>
          		</ul>
              <br />
              <ul>
                <li><a href="/messages" target="_blank">Modals (Mensajes de Datos personales)</a></li>
              </ul>
          	</div>
          </Col>
        </Row>
      </Grid>   
    );
  }
}
export default Indice;


