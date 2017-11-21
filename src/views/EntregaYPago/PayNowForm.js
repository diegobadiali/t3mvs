import React from 'react';
import {Col, Row, Button, FormGroup, Radio} from 'react-bootstrap';
import ListInline from '../../components/CreditCard/ListInline';
import CreditCardForm from '../../components/CreditCard/Form';
import {simpleValidation} from '../../utils/validators';
import Message from '../../components/Message/Message';
import Pay from './Pay';
class PayNowForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isEditingAddress: false,
      fields: {
        paymentMethod: {val: '', validationState: null},
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
    return (
      <Row>
        <Col sm={12}>

          <div className="radios-entrega">
            <FormGroup validationState={this.state.fields.paymentMethod.validationState}>

              <Radio name="paymentMethod" value="creditCard" onClick={this.handleChange}>
                <h4>Tarjeta de crédito</h4>
                <ListInline
                  creditCards="visa,master,amex,diners,cabal,naranja"
                />
              </Radio>

              <Radio name="paymentMethod" value="cash" onClick={this.handleChange}>
                <h4>Efectivo</h4>
                <ListInline
                  cashGateways="pagofacil,rapipago"
                />
              </Radio>
            </FormGroup>
          </div>

          <div>
            {
              this.state.fields.paymentMethod.val == 'creditCard' ? (
                  <div>
                    <CreditCardForm
                      userData={this.props.userData}
                    />
                    
                    <Pay />
                  </div>
                ) : (null)
            }

            {
              this.state.fields.paymentMethod.val == 'cash' ? (
                  <div>
                    <Message text={"En el email de confirmación recibirás el cupón para realizar el pago"} class={"info"}/>
                     <Pay />
                  </div>
                ) : (null)
            }

          </div>
        </Col>
      </Row>
    );
  }
}

export default PayNowForm;