import React from 'react';
import {Col, Row, Button, FormGroup, Radio} from 'react-bootstrap';
import {simpleValidation} from '../../utils/validators';
import BillingAddressForm from '../DatosPersonales/BillingOtherAddressForm';
import BillingAddressResume from '../DatosPersonales/BillingAddressResume';
import RetiroAddressResume from '../DatosPersonales/RetiroAddressResume';
import Map from '../../components/Map/Map';
class DeliveryForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isEditingAddress: false,
      isSelectedSucursal: false,
      fields: {
        deliverTo: {val: '', validationState: null},
      },
      validForm: false
    };
  }

  handleChange = (e) => {
    let newFields = Object.assign({}, this.state.fields);

    let isValid = simpleValidation(e.target);

    let newField = Object.assign({}, newFields[e.target.name]);
    newField.val = e.target.value;
    newField.validationState = isValid ? null : 'error';

    newFields[e.target.name] = newField;

    this.setState({
      fields: newFields,
      selectedOption: this.state.fields.deliverTo.val,
      
    });
    
  };

  handleEditAddress = () => {
    this.setState({
      isEditingAddress: true,
      deliveryComplete: false,
    });
    this.props.deliveryPanelFunction()
  };

  handleNext = () => {
    this.setState({
      isEditingAddress: false,
    });
    this.props.handleNext()
  };
  handleSucursal = () => {
    this.setState({
      isSelectedSucursal: true,
    });
    this.props.handleNext()
  };
  selectSucursal = () => {
    this.setState({
      isSelectedSucursal: false,
    });
    this.props.deliveryPanelFunction()
  };

  handleBillingAddressChange = (key, val) => {
    let newUserData = Object.assign({}, this.state.userData);
    newUserData.address[key] = val;
    this.setState({userData: newUserData});
  };

  render() {
    return (
      <form>
        <Row>
          <Col sm={12}>
            <div className="radios-entrega">
              <FormGroup validationState={this.state.fields.deliverTo.validationState}>

                <Radio name="deliverTo" value="home" onClick={this.handleChange}>
                  <i className="icon-envios"/> <h4 className="nf">Envío a domicilio <span>¡Bonificado!</span></h4>
                  <p>De 1 a 4 días hábiles. Hasta 7 días para compras desde el interior.</p>
                </Radio>

                <Radio name="deliverTo" value="subsidiary" onClick={this.handleChange}>
                  <i className="icon-centros-movistar"/> <h4 className="nf">Retiro en sucursal <span>¡Bonificado!</span></h4>
                  <p>A partir de realizada la compra y por 3 días hábiles.</p>
                </Radio>
              </FormGroup>
            </div>

            {this.state.fields.deliverTo.val.length > 0 ? (

                this.state.fields.deliverTo.val == 'home' ? (
                    <div className="cont-entrega-pago">
                    <h4>Envío a domicilio</h4>

                    {this.props.sinstock ? (
                      <div className="alert alert-info-plan"><p><i className="fa fa-info-circle"></i> El equipo seleccionado no se encuentra disponible para envío a domicilio</p></div>
                      ):(


                      <div>

                    {!this.props.deliveryComplete & !this.state.isEditingAddress ? (
                      <p>Si elegís envío a este domicilio, podrá recibir cualquier persona mayor de edad con DNI. Si elegís otro domicilio de entrega, podrá recibir el titular o autorizado.</p>
                      ):('')
                    }

                    {!this.state.isEditingAddress ? (
                      <div>
                        <BillingAddressResume
                        {...this.props.userData.address}
                        handleEditAddress={this.handleEditAddress}
                        />
                        <div className="cont-btns">
                          <Button bsStyle="success" onClick={this.props.handleNextComplete}>
                          Continuar
                          </Button>
                        </div>
                      </div>
                      ) : (
                      <div>
                        <BillingAddressForm
                        handleUserDataChange={this.handleBillingAddressChange}
                        userData={this.props.userData.address}
                        isOtherAddress={true}
                        />
                        <div className="cont-btns">
                          <Button bsStyle="success" onClick={this.handleNext}>
                          Continuar
                          </Button>
                        </div>
                      </div>
                      )
                    }
                    </div>
                      )}
                    </div>
                  ) : (
                    <div className="cont-entrega-pago">

                    <h4>Retiro en sucursal</h4>

                    {!this.state.isSelectedSucursal ? (
                      <Map handleSucursal={this.handleSucursal} device={this.props.device}/>
                      ) : (
                      <RetiroAddressResume
                            {...this.props.sucursalData.address}
                            selectSucursal={this.selectSucursal}
                            handleSucursal={this.handleSucursal}
                          />
                       )
                      }
                      
                    </div>
                  )
              ) : (null)
            }
            <div>
            </div>
          </Col>
        </Row>
      </form>
    );
  }
}
export default DeliveryForm;