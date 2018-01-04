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
                <li><a href="/elegi-plan-para-tu-equipo" target="_blank">Elegí Plan para tu equipo</a></li>
                <li><a href="/elegi-plan-para-tu-equipo/select-location" target="_blank">Elegí Plan para tu equipo (select location)</a></li>
                <li><a href="/elegi-plan-para-tu-equipo-no-pic" target="_blank">Elegí Plan para tu equipo (sin foto del equipo)</a></li>
                <li><a href="/elegi-plan-para-tu-equipo-sin-planes" target="_blank">Elegí Plan para tu equipo (sin planes)</a></li>
                <li><a href="/elegi-plan-para-tu-linea" target="_blank">Elegí Plan para tu línea</a></li>
                <li><a href="/elegi-plan-para-tu-linea/select-location" target="_blank">Elegí Plan para tu línea (select location)</a></li>
                <li><a href="/elegi-plan-para-tu-linea-tipo/tipo-de-plan" target="_blank">Elegí Plan para tu línea (tipo de plan)</a></li>
                <li><a href="/elegi-plan-para-tu-linea-sin-planes" target="_blank">Elegí Plan para tu línea (sin planes)</a></li>
                <li><a href="/resumen-de-compra" target="_blank">Resumen de compra</a></li>
                <li><a href="/resumen-de-compra-equipo" target="_blank">Resumen de compra (Equipo)</a></li>
                <li><a href="/resumen-de-compra-linea" target="_blank">Resumen de compra (Línea)</a></li>
                <li><a href="/datos-personales/guest" target="_blank">Datos personales y de facturacion (Guest)</a></li>
                <li><a href="/datos-personales/logged" target="_blank">Datos personales y de facturacion (Logged - Cambiar DataStoreSupport.js isGuest[false] )</a></li>
                <li><a href="/datos-personales/prepago" target="_blank">Datos personales y de facturacion (Prepago)</a></li>
                <li><a href="/datos-personales-solo-linea/guest" target="_blank">Datos personales y de facturacion (Guest y sólo línea)</a></li>
                <li><a href="/datos-personales-solo-linea/logged" target="_blank">Datos personales y de facturacion (Logged y sólo línea)</a></li>
                <li><a href="/entrega-y-pago/guest" target="_blank">Entrega y pago (Guest)</a></li>
                <li><a href="/entrega-y-pago/logged" target="_blank">Entrega y pago (Logged)</a></li>
                <li><a href="/entrega-y-pago-solo-linea/guest" target="_blank">Entrega y pago (Guest y sólo línea)</a></li>
                <li><a href="/entrega-y-pago-solo-linea/logged" target="_blank">Entrega y pago (Logged y sólo línea)</a></li>
                <li><a href="/mercadopago" target="_blank">MercadoPago</a></li>
                <li><a href="/thank-you-page" target="_blank">Thank you page</a></li>
                <li><a href="/thank-you-page-plan" target="_blank">Thank you page (Plan)</a></li>
                <li><a href="/thank-you-page-equipo" target="_blank">Thank you page (Equipo)</a></li>
                <li><a href="/thank-you-page-efectivo" target="_blank">Thank you page (Pago en efectivo)</a></li>
          		</ul>
              <br />
              <ul>
                <li><a href="/messages" target="_blank">Modals (Mensajes)</a></li>
              </ul>
          	</div>
          </Col>
        </Row>
      </Grid>   
    );
  }
}
export default Indice;


