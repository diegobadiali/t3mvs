import React, {Component} from 'react';
import {Grid, Row, Col, Panel, PageHeader} from 'react-bootstrap';
import Pasos from '../../components/Pasos/Pasos';
import ProductResume from '../../components/ProductResume/ProductResume';
import DeliveryForm from './DeliveryForm';
import PayNowForm from './PayNowForm';
import PayPlanForm from './PayPlanForm';
import DataStoreSupport from '../../DataStoreSupportPlan';
import Pay from './Pay';
class EntregaYPago extends React.Component {

  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      isEditingAddress: true,
      isSelectedSucursal: false,
      deliveryComplete: false,
      formComplete: false,
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
        sucursalData: {
          address: {
            street: 'Av. Corrientes',
            number: '1134',
            neighborhood: 'Almagro',
            horario: 'Lunes a viernes de 9 a 19hs',
          }
        },
        open: true,
        valid: false,
        verifiedData: false,
      },
      cart: DataStoreSupport.getCart(),
      deliveryPanelOpen: true,
      devicePanelOpen: false,
      planPanelOpen: false,
      planInnerPanelOpen: false,
    };
  }

  handleEditAddress = () => {
    this.setState({
      isEditingAddress: true,
    });
  };

  selectSucursal = () => {
    this.setState({
      isSelectedSucursal: false,
    });
  };

  handleSucursal = () => {
    this.setState({
      deliveryPanelOpen: false,
      devicePanelOpen: true,
      planPanelOpen: false,
    });
  };

  handleNextAddress = () => {
    this.setState({
      deliveryPanelOpen: false,
      devicePanelOpen: false,
      planPanelOpen: true,
      planInnerPanelOpen: true,
      isEditingAddress: false,
      deliveryComplete: true
    });
  };
  handleNextComplete = () => {
    this.setState({
      deliveryPanelOpen: false,
      devicePanelOpen: false,
      planPanelOpen: true,
      planInnerPanelOpen: true,
      isEditingAddress: true,
      deliveryComplete: true
    });
  };

  handleNextPlan = () => {
    this.setState({
      deliveryPanelOpen: false,
      devicePanelOpen: true,
      planPanelOpen: false,
      planInnerPanelOpen: true,
      formComplete: true,
    });
  };

  handleNextPlanCash = () => {
    this.setState({
      deliveryPanelOpen: false,
      devicePanelOpen: true,
      planPanelOpen: false,
      planInnerPanelOpen: true,
      formComplete: false,
      efectivoComplete: true,
    });
  };



  deliveryPanelFunction = () => {
    this.setState({
      deliveryPanelOpen: true
    })
  }
  planPanelFunction = () => {
    this.setState({
      planPanelOpen: true
    })
  }

  handleEditCard = () => {
    this.setState({
      formComplete: false,
      planPanelOpen: true
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


  render() {
    return (
      <div className="datos-personales-facturacion entrega-pago">
        <Pasos currentStep={3}/>
        <Grid>
          <PageHeader>Entrega y pago</PageHeader>
          <Row>
            <Col md={8}>        
              <div className="open">
                <h3>Pago del plan (Mensual) <span>{this.state.cart.plan.price}/mes</span></h3>
                <Panel collapsible expanded={true}>
                  <PayPlanForm
                    isLoggedIn={this.state.isLoggedIn}
                    userData={this.state.datosPersonales.userData}
                    handleNext={this.handleNextPlan}
                    handleNextCash={this.handleNextPlanCash}
                    devicePanelOpen={this.state.devicePanelOpen}
                    formComplete={this.state.formComplete}
                    efectivoComplete={this.state.efectivoComplete}
                    handleEditCard={this.handleEditCard}
                    planPanelOpen={this.state.planPanelOpen}
                    planPanelFunction={this.planPanelFunction}
                  />
                  {this.state.formComplete || this.state.efectivoComplete ? <Pay /> : '' }
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