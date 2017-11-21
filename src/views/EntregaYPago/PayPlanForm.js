import React from 'react';
import {Col, Row, Button, FormGroup, Radio, FormControl, Checkbox} from 'react-bootstrap';
import CardNumberFormRow from '../../components/CreditCard/CardNumberFormRow';
import CardSelectFormRow from '../../components/CreditCard/CardSelectFormRow';
import CreditCardForm from '../../components/CreditCard/Form'; //
import {simpleValidation} from '../../utils/validators';
import moment from 'moment';
import TooltipTarjeta from '../../components/CreditCard/Tooltip';
import NumberFormat from 'react-number-format';

import ListInline from '../../components/CreditCard/ListInline';


class PayPlanForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      firstOverdue: moment(),
      isLoggedIn: props.isLoggedIn,
      isEditingAddress: false,
      cardSelected: false,
      fields: {
        cardOption: {val: '', validationState: null, complete:null},
        cardBank: {val: '', validationState: null, complete:null},
        paymentMethod: {val: '', validationState: null, complete:null},
        paymentMethodMensual: {val: '', validationState: null, complete:null},
        cardName: {val: '', validationState: null, complete:null},
        cardNumber: {val: '', validationState: null, complete:null},
        cardDue: {val: '', validationState: null, complete:null},
        cardCVC: {val: '', validationState: null, complete:null},
        cardTitular: {val: '', validationState: null, complete:null},
        cardDNI: {val: '', validationState: null, complete:null},
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
    newField.complete = true

    newFields[e.target.name] = newField;

    this.setState({
      fields: newFields,
      cardSelected: true      
    });


  };

    handleChangeCard = (e) => {
    let newFields = Object.assign({}, this.state.fields);

    let isValid = simpleValidation(e.target);

    let newField = Object.assign({}, newFields[e.target.name]);
    newField.val = e.target.value;
    newField.validationState = isValid ? null : 'error';
    newField.complete = true;
    newFields[e.target.name] = newField;

    this.setState({
      fields: newFields,
      cardSelected: true
    });

  };

  render() {

    let cardData = (cardOption) => {

      if (cardOption == 'other' || !this.props.isLoggedIn) {
        return (
          <div>

         { this.props.formComplete ? (
            <div className="datos-cargardos">
              <a className="btn btn-link pull-right" onClick={this.props.handleEditCard}>
                <i className="fa fa-pencil"></i>
              </a>
              <ul>
                <li><strong>Pago con tarjeta de crédito:</strong> </li>
                <li>xxxx xxxx xxxx 5654</li>
              </ul>
            </div>)
            :(
            <CardNumberFormRow
              cardNumber={this.state.fields.cardNumber}
              cardName={this.state.fields.cardName}
              cardDue={this.state.fields.cardDue}
              cardCVC={this.state.fields.cardCVC}
              cardTitular={this.state.fields.cardTitular}
              cardDNI={this.state.fields.cardDNI}
              handleChange={this.handleChange}
            />
            )
          }
            
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
          <h5>El primer vencimiento de tu factura será el {this.state.firstOverdue.format('DD/MM/YYYY')} por un importe de $1039,00 luego $889,00/mes</h5>

          <div className="radios-entrega">
            <FormGroup validationState={this.state.fields.paymentMethodMensual.validationState}>

              <Radio name="paymentMethodMensual" value="creditCard" onClick={this.handleChange}>
                <h4>Débito en tarjeta de crédito</h4>
                <ListInline
                  creditCards="visa,master,amex,diners,cabal,naranja"
                />
              </Radio>

              <Radio name="paymentMethodMensual" value="cash" onClick={this.handleChange}>
                <h4>Efectivo</h4>
                <ListInline
                  cashGateways="pagofacil,rapipago"
                />
              </Radio>
            </FormGroup>
          </div>

          <div>
            {
              this.state.fields.paymentMethodMensual.val == 'creditCard' ? (
                  <div>
                   
                      {
                        this.props.isLoggedIn ? (
                          !this.props.formComplete ? (
                             <Row>
                      <Col sm={6}>
                              <FormGroup validationState={this.state.fields.cardOption.validationState} className={this.state.fields.cardOption.complete ? 'active' : ''}>
                                <FormControl
                                  componentClass="select"
                                  placeholder="*Seleccioná una tarjeta"
                                  name="cardOption"
                                  onChange={this.handleChangeCard}
                                >
                                  <option selected disabled>Seleccioná una tarjeta</option>
                                  <option value="other">Otra tarjeta</option>
                                  {cardOptions}
                                </FormControl>
                                <i className="fa fa-angle-down"></i>
                              </FormGroup>
                            </Col>
                    </Row>
                            ):(
                            this.state.fields.cardOption.val != "other" ? (
                            <Row>
                            <Col sm={12}>
                            <div className="datos-cargardos">
                              <a className="btn btn-link pull-right" onClick={this.props.handleEditCard}>
                                <i className="fa fa-pencil"></i>
                              </a>
                              <ul>
                                <li><strong>Pago con tarjeta de crédito:</strong> </li>
                                <li>xxxx xxxx xxxx 5654</li>
                              </ul>
                            </div>
                            </Col>
                    </Row>
                    ):(null)
                            )
                          ) : (null)
                      }
                      
                    {cardData(this.state.fields.cardOption.val)}
                    
                    <div className={this.props.formComplete ? 'hide' : 'cont-btns'}>
                      <Button bsStyle="success" onClick={this.props.handleNext} disabled={this.state.cardSelected ? '' : 'disabled'}>
                        Continuar
                      </Button>
                    </div>
                  </div>
                ) : (null)
            }
            {
              this.state.fields.paymentMethodMensual.val == 'cash' ? (
                
                <div className={this.props.formComplete ? 'hide' : 'cont-btns'}>
                      <Button bsStyle="success" onClick={this.props.handleNext}>
                        Continuar
                      </Button>
                    </div>
                ) : (null)
            }

          </div>
          

        </Col>

      </Row>
    );
  }
}

export default PayPlanForm;