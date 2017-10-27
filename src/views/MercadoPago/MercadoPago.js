import React, {Component} from 'react';
import {Grid, Row, Col, PageHeader} from 'react-bootstrap';
import Pasos from '../../components/Pasos/Pasos';
import ProductResume from '../../components/ProductResume/ProductResume';
import DataStoreSupport from '../../DataStoreSupport';
import Redirect from '../../components/Redirect/RedirectMercadoPago';
import '../EntregaYPago/EntregaYPago.css';
class DatosPersonales extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      cart: null,
    };
  }
  componentDidMount() {
    /* FIXME: Solo para fines del maquetado */
    document.getElementById('mimovistar-btn').style.visibility = "hidden";
    let loggedIn = false;
    /* FIXME: Solo para fines del maquetado */
    loggedIn = true;
    this.setState({
      cart: DataStoreSupport.getCart(),
      isLoggedIn: loggedIn,
    });
  }
  render() {
    return (
      <div className="datos-personales-facturacion">
        <Pasos currentStep={3}/>
        <PageHeader />
        <Grid>
          <Row>
            <Col md={8}>
            <Redirect />
            </Col>
            <Col md={4}>
              <ProductResume cart={this.state.cart}/>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
export default DatosPersonales;