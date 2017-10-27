import React from 'react';
import {Col, Row, Button, FormGroup, Radio, FormControl, Checkbox} from 'react-bootstrap';
import CardNumberFormRow from '../../components/CreditCard/CardNumberFormRow';
import CardSelectFormRow from '../../components/CreditCard/CardSelectFormRow';
import {simpleValidation} from '../../utils/validators';
import moment from 'moment';
import TooltipTarjeta from '../../components/CreditCard/Tooltip';
import NumberFormat from 'react-number-format';


class PayPlanForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      firstOverdue: moment(),
      isLoggedIn: props.isLoggedIn,
      isEditingAddress: false,
      fields: {
        cardOption: {val: '', validationState: null},
        cardBank: {val: '', validationState: null},
        paymentMethod: {val: '', validationState: null},
        cardName: {val: 'visa', validationState: null},
        cardNumber: {val: '', validationState: null},
        cardDue: {val: '', validationState: null},
        cardCVC: {val: '', validationState: null},
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

    this.setState({fields: newFields});

  };

  render() {

    let cardData = (cardOption) => {

      if (cardOption == 'other' || !this.props.isLoggedIn) {
        return (
          <div>
            <CardSelectFormRow
              cardName={this.state.fields.cardName}
              cardBank={this.state.fields.cardBank}
              instalments={false}
              handleChange={this.handleChange}
              handleInstalmentChange={this.handleInstalmentChange}
            />
            <CardNumberFormRow
              cardNumber={this.state.fields.cardNumber}
              cardName={this.state.fields.cardName}
              cardDue={this.state.fields.cardDue}
              cardCVC={this.state.fields.cardCVC}
              handleChange={this.handleChange}
            />
          </div>
        );
      }
      return null;
    };

    let cardOptions = this.props.userData.creditCards.map((creditCard) => {
      return (
        <option value={creditCard.id} key={creditCard.id}>
          {creditCard.number}
        </option>
      );
    });

    return (
      <Row>
        <Col sm={12}>

          <h5>
            El primer vencimiento de tu factura será el {this.state.firstOverdue.format('DD/MM/YYYY')}
          </h5>

          <div className="radios-entrega">
            <FormGroup validationState={this.state.fields.paymentMethod.validationState}>

              <Radio name="paymentMethod" value="creditCard" onClick={this.handleChange}>
                Débito en tarjeta de crédito
              </Radio>

              <Radio name="paymentMethod" value="cash" onClick={this.handleChange}>
                Efectivo
              </Radio>
            </FormGroup>
          </div>

          <div>
            {
              this.state.fields.paymentMethod.val == 'creditCard' ? (
                  <div>
                    <Row>
                      {
                        this.props.isLoggedIn ? (
                            <Col sm={6}>
                              <FormGroup validationState={this.state.fields.cardOption.validationState}>
                                <FormControl
                                  componentClass="select"
                                  placeholder="*Seleccioná una tarjeta"
                                  value={this.state.fields.cardOption.val}
                                  name="cardOption"
                                  onChange={this.handleChange}
                                >
                                  <option value="">Seleccioná una tarjeta</option>
                                  <option value="other">Otra tarjeta</option>
                                  {cardOptions}
                                </FormControl>
                                <i
                                  className="fa fa-angle-down"
                                />
                              </FormGroup>
                            </Col>
                          ) : (null)
                      }
                      {
                        (this.state.fields.cardOption.val != 'other' && this.state.fields.cardOption.val.length > 0) ? (
                            <div>
                              <Col xs={4} sm={2}>
                                <FormGroup validationState={this.state.fields.cardCVC.validationState}>
                                  <NumberFormat
                                    format="###"
                                    placeholder="*CVC"
                                    className="form-control"
                                    name="cardDue"
                                    mask="_"
                                    onChange={this.handleChange}
                                    required
                                  />
                                </FormGroup>
                              </Col>
                              <Col xs={2} sm={1}><TooltipTarjeta position={"top"}/></Col>
                            </div>
                          ) : (null)
                      }
                    </Row>
                    {cardData(this.state.fields.cardOption.val)}
                  </div>
                ) : (null)
            }
          </div>
          <hr/>
          <div className="cont-checkboxs">
            <Checkbox>
              Acepto los <Button bsStyle="link">Terminos y condiciones</Button>
            </Checkbox>
            <Checkbox>
              Acepto el contrato de servicio de Movistar. <Button bsStyle="link">Descargar contrato</Button>
            </Checkbox>

          </div>
          <div className="cont-buttons">
            <div className="pull-left">
              <Button bsStyle="default">Cancelar</Button>
            </div>
            <div className="pull-right">
              <Button bsStyle="success">Pagar y Finalizar</Button>
            </div>
          </div>

        </Col>

      </Row>
    );
  }
}

export default PayPlanForm;