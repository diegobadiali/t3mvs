import React, {Component} from 'react';
import {Grid, Row, Col, Panel, PageHeader} from 'react-bootstrap';
import Pasos from '../../components/Pasos/Pasos';
import ProductResume from '../../components/ProductResume/ProductResume';
import DeliveryForm from './DeliveryForm';
import PayNowForm from './PayNowForm';
import PayPlanForm from './PayPlanForm';
import DataStoreSupport from '../../DataStoreSupport';
import './EntregaYPago.css';

class EntregaYPago extends React.Component {

  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      isEditingAddress: true,
      datosPersonales: {
        userData: {
          address: {
            street: 'Av. Libertador',
            number: '897',
            floor: '9',
            apartment: 'B',
            locality: 'CABA',
            city: 'CABA',
          },
          creditCards: [],
        },
        open: true,
        valid: false,
        verifiedData: false,
      },
      cart: DataStoreSupport.getCart(),
      deliveryPanelOpen: true,
      devicePanelOpen: false,
      planPanelOpen: false,
    };
  }

  handleEditAddress = () => {
    this.setState({
      isEditingAddress: true,
    });
  };

  handleNextAddress = () => {
    this.setState({
      deliveryPanelOpen: false,
      devicePanelOpen: true,
      planPanelOpen: false,
    });
  };

  handleNextDevice = () => {
    this.setState({
      deliveryPanelOpen: false,
      devicePanelOpen: false,
      planPanelOpen: true,
    });
  };

  componentDidMount() {

    /* FIXME: Solo para fines del maquetado */
    document.getElementById('mimovistar-btn').style.visibility = "hidden";

    let newDatosPersonales = Object.assign({}, this.state.datosPersonales);
    let loggedIn = false;

    /* FIXME: Solo para fines del maquetado */
    if (this.props.location.params.mode == 'logged') {
      newDatosPersonales.userData = DataStoreSupport.getUserData().data;
      loggedIn = true;
    }

    this.setState({
      cart: DataStoreSupport.getCart(),
      datosPersonales: newDatosPersonales,
      isLoggedIn: loggedIn,
      isEditingAddress: !loggedIn,
    });
  }

  toggleActivePanel = (e) => {
    switch (e.target.id) {
      case 'delivery-btn':
        this.setState({
          deliveryPanelOpen: !this.state.deliveryPanelOpen,
          devicePanelOpen: false,
          planPanelOpen: false,
        });
        break;
      case 'device-btn':
        this.setState({
          deliveryPanelOpen: false,
          devicePanelOpen: !this.state.devicePanelOpen,
          planPanelOpen: false,
        });
        break;
      case 'plan-btn':
        this.setState({
          deliveryPanelOpen: false,
          devicePanelOpen: false,
          planPanelOpen: !this.state.planPanelOpen,
        });
        break;

    }
  };


  render() {
    return (
      <div className="datos-personales-facturacion">
        <Pasos currentStep={3}/>
        <Grid>
          <PageHeader>Entrega y pago</PageHeader>
          <Row>
            <Col md={8}>

              <div className={ !this.state.deliveryPanelOpen ? 'collapsed' : 'open' }>
                <h3>
                  Entrega
                  <button
                    className="btn btn-link pull-right"
                    id="delivery-btn"
                    onClick={this.toggleActivePanel}
                  >
                    <i className={this.state.deliveryPanelOpen ? 'fa fa-angle-up' : 'fa fa-angle-down'}/>
                  </button>
                </h3>
                <Panel collapsible expanded={this.state.deliveryPanelOpen}>
                  <DeliveryForm
                    userData={this.state.datosPersonales.userData}
                    handleNext={this.handleNextAddress}
                  />
                </Panel>
              </div>

              <div className={ !this.state.devicePanelOpen ? 'collapsed' : 'open' }>
                <h3>
                  Pago del equipo (Ahora)
                  <span>{this.state.cart.total}</span>
                  <button
                    id="device-btn"
                    className="btn btn-link pull-right"
                    onClick={this.toggleActivePanel}
                  >
                    <i className={this.state.devicePanelOpen ? 'fa fa-angle-up' : 'fa fa-angle-down'}/>
                  </button>
                </h3>
                <Panel collapsible expanded={this.state.devicePanelOpen}>
                  <PayNowForm
                    isLoggedIn={this.state.isLoggedIn}
                    userData={this.state.datosPersonales.userData}
                    handleNext={this.handleNextDevice}
                  />
                </Panel>
              </div>


              <div className={ !this.state.planPanelOpen ? 'collapsed' : 'open' }>
                <h3>
                  Pago del plan (Mensual) <span>{this.state.cart.plan.price}/mes</span>
                  <button
                    id="plan-btn"
                    className="btn btn-link pull-right"
                    onClick={this.toggleActivePanel}
                  >
                    <i className={this.state.planPanelOpen ? 'fa fa-angle-up' : 'fa fa-angle-down'}/>
                  </button>
                </h3>
                <Panel collapsible expanded={this.state.planPanelOpen}>
                  <PayPlanForm
                    isLoggedIn={this.state.isLoggedIn}
                    userData={this.state.datosPersonales.userData}
                  />
                </Panel>
              </div>

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
export default EntregaYPago;