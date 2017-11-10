import React from 'react';
import {Col, Row, Button, FormGroup, Radio, FormControl, Checkbox} from 'react-bootstrap';
import CardNumberFormRow from '../../components/CreditCard/CardNumberFormRow';
import CardSelectFormRow from '../../components/CreditCard/CardSelectFormRow';
import {simpleValidation} from '../../utils/validators';
import moment from 'moment';
import TooltipTarjeta from '../../components/CreditCard/Tooltip';
import NumberFormat from 'react-number-format';
import Pay from './Pay';


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
        paymentMethodMensual: {val: '', validationState: null},
        cardName: {val: 'visa', validationState: null},
        cardNumber: {val: '', validationState: null},
        cardDue: {val: '', validationState: null},
        cardCVC: {val: '', validationState: null},
        cardTitular: {val: '', validationState: null},
        cardDNI: {val: '', validationState: null},
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
              cardTitular={this.state.fields.cardTitular}
              cardDNI={this.state.fields.cardDNI}
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
            <FormGroup validationState={this.state.fields.paymentMethodMensual.validationState}>

              <Radio name="paymentMethodMensual" value="creditCard" onClick={this.handleChange}>
                Débito en tarjeta de crédito
              </Radio>

              <Radio name="paymentMethodMensual" value="cash" onClick={this.handleChange}>
                Efectivo
              </Radio>
            </FormGroup>
          </div>

          <div>
            {
              this.state.fields.paymentMethodMensual.val == 'creditCard' ? (
                  <div>
                    <Row>
                      {
                        this.props.isLoggedIn ? (
                            <Col sm={6}>
                              <FormGroup className="active" validationState={this.state.fields.cardOption.validationState}>
                                <FormControl
                                  componentClass="select"
                                  value={this.state.fields.cardOption.val}
                                  name="cardOption"
                                  onChange={this.handleChange}
                                >
                                  {cardOptions}
                                </FormControl>
                                <i className="fa fa-angle-down"></i>
                              </FormGroup>
                            </Col>
                          ) : (null)
                      }
                    </Row>
                    {cardData(this.state.fields.cardOption.val)}
                    <Pay />
                  </div>
                ) : (null)
            }
            {
              this.state.fields.paymentMethodMensual.val == 'cash' ? (
                <Pay />
                ) : (null)
            }

          </div>
          

        </Col>

      </Row>
    );
  }
}

export default PayPlanForm;