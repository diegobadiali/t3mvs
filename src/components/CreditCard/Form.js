import React, {Component, PropTypes} from 'react';
import NumberFormat from 'react-number-format';
import {Col, Row, Button, FormGroup, Radio, FormControl, Checkbox} from 'react-bootstrap';
import {simpleValidation} from '../../utils/validators';
import CardSelectFormRow from './CardSelectFormRow';
import CardNumberFormRow from './CardNumberFormRow';
import TooltipTarjeta from '../../components/CreditCard/Tooltip';

class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {
      totalAmount: props.totalAmount, // FAKE
      instalmentAmount: props.totalAmount, // FAKE
      cft: 0,
      cuotas: null,
      fields: {
        cardName: {val: 'visa', validationState: null, complete: null},
        cardBank: {val: '', validationState: null, complete: null},
        instalments: {val: '', validationState: null, complete: null},
        cardNumber: {val: '', validationState: null, complete: null},
        cardDue: {val: '', validationState: null, complete: null},
        cardCVC: {val: '', validationState: null, complete: null},
        cardOption: {val: '', validationState: null, complete: null},
        cardTitular: {val: '', validationState: null, complete: null},
        cardDNI: {val: '', validationState: null, complete: null},
        cardSexo: {val: '', validationState: null, complete: null},
      }
    };
  }

  handleInstalmentChange = (e) => {
    let newFields = Object.assign({}, this.state.fields);
   // newFields.instalments.val = e.target.value;

    newFields[e.target.name] = {
      val: e.target.value,
      complete: true
    };

    this.setState({
      fields: newFields,
      //instalmentAmount: this.state.totalAmount / newFields.instalments.val,
      cuotas: newFields.instalments.val,
    });
    /* SIMULATE */
    switch (newFields.instalments.val) {
      case '1':
      this.setState({ instalmentAmount:'22000', totalAmount: '22000'});
      break;
      case '2':
      this.setState({cft: '5,34', instalmentAmount:'11500', totalAmount: '23000'});
      break;
      case '3':
      this.setState({cft: '9,02', instalmentAmount: '8000', totalAmount: '24000'});
      break;
    };

  };

  handleChange = (e) => {
    let newFields = Object.assign({}, this.state.fields);

    let isValid = simpleValidation(e.target);

     // let newField = Object.assign({}, newFields[e.target.name]);
     // newField.val = e.target.value;
     // newField.validationState = isValid ? null : 'error';

     // newFields[e.target.name] = newField;
    newFields[e.target.name] = {
      val: e.target.value,
      validationState: isValid ? null : 'error',
      complete: true
    };

    this.setState({fields: newFields});
  };

  render() {

    let cardOptions = this.props.userData.creditCards.map((creditCard) => {
      return (
        <option value={creditCard.id} key={creditCard.id}>
          {creditCard.number}
        </option>
      );
    });

    return (
      <div className="creditcard-form">
        <Row>
          {
            this.props.isLoggedIn ? (
                <Col sm={6}>
                  <FormGroup validationState={this.state.fields.cardOption.validationState}>
                    <FormControl
                      componentClass="select"
                      placeholder="*Seleccioná una tarjeta"
                      name="cardOption"
                      onChange={this.handleChange}
                    >
                      <option selected disabled>Seleccioná una tarjeta</option>
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
                  <Col sm={2}>
                    <FormGroup validationState={this.state.fields.instalments.validationState}>
                      <FormControl
                        componentClass="select"
                        placeholder="*Cuotas"
                        value={this.state.fields.instalments.val}
                        name="instalments"
                        onChange={this.handleInstalmentChange}
                      >
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                      </FormControl>
                      <i
                        className="fa fa-angle-down"
                      />
                    </FormGroup>
                  </Col>
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
        {
          (this.state.fields.cardOption.val == 'other' || !this.props.isLoggedIn) ? (
              <CardSelectFormRow
                cardName={this.state.fields.cardName}
                cardBank={this.state.fields.cardBank}
                instalments={this.state.fields.instalments}
                handleChange={this.handleChange}
                handleInstalmentChange={this.handleInstalmentChange}
              />
            ) : (null)
        }

       {
          (this.state.cuotas) ? (
              <div className="bg-cuotas">
                <div className="cuotas">

                  <h4>{this.state.fields.instalments.val} cuota{this.state.fields.instalments.val > 1 ? 's' : ''} de:</h4>
                  <h5>
                    <NumberFormat
                      value={this.state.instalmentAmount}
                      displayType={'text'}
                      thousandSeparator={'.'}
                      decimalSeparator={','}
                      prefix={'$'}
                    />
                  </h5>
                </div>
                <div className="total">
                  <h4>Total:</h4>
                  <h5>
                    <NumberFormat
                      value={this.state.totalAmount}
                      displayType={'text'}
                      thousandSeparator={'.'}
                      decimalSeparator={','}
                      prefix={'$'}
                    />
                  </h5>
                </div>
                <div className="cft">
                {this.state.cuotas != 1 ? (
                  <div><h4>CFT:</h4> <h5>{this.state.cft}%</h5></div>) : (<div><h4>&nbsp;</h4><h5>Sin intereses</h5></div>)
                }

                </div>

              </div>
           ) : (null)
        }
        {
          (this.state.fields.cardOption.val == 'other' || !this.props.isLoggedIn) ? (
              <CardNumberFormRow
                cardNumber={this.state.fields.cardNumber}
                cardName={this.state.fields.cardName}
                cardDue={this.state.fields.cardDue}
                cardCVC={this.state.fields.cardCVC}
                cardTitular={this.state.fields.cardTitular}
                cardDNI={this.state.fields.cardDNI}
                handleChange={this.handleChange}
              />
            ) : (null)
        }

      </div>
    );
  }
}

Form.defaultProps = {
  totalAmount: 22000,
};

Form.propTypes = {
  totalAmount: PropTypes.number,
};


export default Form;
