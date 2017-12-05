import React, {Component} from 'react';
import {Grid, Row, Col, FormControl, Panel, PageHeader, Button} from 'react-bootstrap';
import Pasos from '../../components/Pasos/Pasos';
import ProductResume from '../../components/ProductResume/ProductResume';
import DatosPersonalesForm from './DatosPersonalesForm';
import DatosPersonalesVeraz from './DatosPersonalesVeraz';
import Resume from './Resume';
import BillingAddressForm from './BillingAddressForm';
import BillingOtherAddressForm from './BillingOtherAddressForm';
import BillingAddressList from './BillingAddressList';
import BillingOtherAddress from './BillingOtherAddress';
import DataStoreSupport from '../../DataStoreSupportPlan';

class DatosPersonales extends React.Component {

  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      isEditingAddress: true,
      isOtherAddress: false,
      isSelectedAdress: false,
      datosPersonales: {
        userData: {
          address: {}
        },
        open: true,
        valid: false,
        verifiedData: false,
      },
      cart: null,
      billingAddress: {
        open: false,
      }
    };
  }

  handleEditAddress = () => {
    this.setState({
      isEditingAddress: true,
    });
  };
  handleOtherAddress = () => {
    this.setState({
      isOtherAddress: true,
      isSelectedAdress: true,
    });
  };
  handleAddress = () => {
    this.setState({
      isOtherAddress: false,
      isSelectedAdress: true,
    });
  };
  handleData = () => {
    this.setState({
      datosPersonales:{
        userData: {
          address: {}
        },
        verifiedData: false
      }
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
      newDatosPersonales.verifiedData = true;
      loggedIn = true;
      this.setState({
        billingAddress:{
          open: true
        }
      })
    }

    this.setState({
      cart: DataStoreSupport.getCart(),
      datosPersonales: newDatosPersonales,
      isLoggedIn: loggedIn,
      isEditingAddress: !loggedIn,
    });
  }

  handleUserDataChange = (key, val) => {
    let newDatosPersonales = Object.assign({}, this.state.datosPersonales);
    newDatosPersonales.userData[key] = val;
    this.setState({datosPersonales: newDatosPersonales});
  };

  handleBillingAddressChange = (key, val) => {
    let newDatosPersonales = Object.assign({}, this.state.datosPersonales);
    newDatosPersonales.userData.address[key] = val;
    this.setState({datosPersonales: newDatosPersonales});
  };

  handleDatosPersonalesStatus = (isValid) => {
    let newDatosPersonales = Object.assign({}, this.state.datosPersonales);
    newDatosPersonales.valid = isValid;
    this.setState({datosPersonales: newDatosPersonales});
  };

  handleOnVerified = () => {

    let newDatosPersonales = Object.assign({}, this.state.datosPersonales);
    newDatosPersonales.valid = true;
    newDatosPersonales.open = false;
    newDatosPersonales.verifiedData = true;

    let newBillingAddress = Object.assign({}, this.state.billingAddress);
    newBillingAddress.open = true;

    this.setState({
      datosPersonales: newDatosPersonales,
      billingAddress: newBillingAddress
    });
  };


  toggleActivePanel = () => {
    let newBillingAddress = Object.assign({}, this.state.billingAddress);
    let newDatosPersonales = Object.assign({}, this.state.datosPersonales);
    newDatosPersonales.open = !this.state.datosPersonales.open;
    newBillingAddress.open = !this.state.billingAddress.open;
    this.setState({
      billingAddress: newBillingAddress,
      datosPersonales: newDatosPersonales,
    });
  };

  render() {
    return (
      <div className="datos-personales-facturacion">
        <Pasos currentStep={2}/>
        <Grid>
          <PageHeader>Datos personales y de facturación</PageHeader>
          <Row>
            <Col md={8}>
              <div id="datos-personales" className='open'>
                <h3>Datos personales</h3>
                <Panel collapsible expanded={true}>
                  {
                    this.state.datosPersonales.verifiedData ? (
                        <Resume
                          {...this.state.datosPersonales.userData}
                          isLoggedIn={this.state.isLoggedIn}
                          toggleActivePanel={this.toggleActivePanel}
                          handleData={this.handleData}
                        />
                      ) : (
                        <div>
                          <DatosPersonalesForm
                            handleStatus={this.handleDatosPersonalesStatus}
                            handleUserDataChange={this.handleUserDataChange}
                            firstname={this.state.datosPersonales.userData.name}
                          />
                          <DatosPersonalesVeraz
                            disabled={!this.state.datosPersonales.valid}
                            onVerified={this.handleOnVerified}
                          />
                        </div>
                      )
                  }
                </Panel>
              </div>
              <div id="domicilio-facturacion" className={ !this.state.billingAddress.open ? 'collapsed' : 'open' }>
                <h3>Domicilio</h3>
                <Panel collapsible expanded={this.state.billingAddress.open}>
                  {
                    !this.state.isEditingAddress ? (
                      <div>
                        <p className="mb20">Si elegís envío a este domicilio, podrá recibir cualquier persona mayor de edad con DNI. Si elegís otro domicilio de entrega, podrá recibir el titular o autorizado.</p>

                          <BillingAddressList
                            {...this.state.datosPersonales.userData.address}
                            handleOtherAddress={this.handleOtherAddress}
                            handleAddress={this.handleAddress}
                          />
                          
                        </div>
                      ) : (
                        <div>
                          <BillingAddressForm
                            handleUserDataChange={this.handleBillingAddressChange}
                            userData={this.state.datosPersonales.userData.address}
                          />
                          <BillingOtherAddress
                            handleUserDataChange={this.handleBillingAddressChange}
                          />
                        </div>
                      )
                  }
                  {
                    this.state.isOtherAddress ? (
                      <div>
                          <BillingOtherAddressForm
                            handleUserDataChange={this.handleBillingAddressChange}
                            userData={this.state.datosPersonales.userData.address}
                            isOtherAddress={this.state.isOtherAddress}
                          /> 
                        </div>
                      ) : (null)
                  }

                  {
                    !this.state.isEditingAddress ? (
                      <BillingOtherAddress
                         handleUserDataChange={this.handleBillingAddressChange}
                        />
                      ):( null )
                  }

                  <Row>
                    <Col sm={12}>
                      <Button bsStyle="success" disabled={this.state.isSelectedAdress ? '' : 'disabled' }>Continuar</Button>
                    </Col>
                  </Row>
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
export default DatosPersonales;