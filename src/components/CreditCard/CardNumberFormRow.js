import React from 'react';
import PropTypes from 'prop-types';
import {Col, Row, FormGroup, FormControl, Radio} from 'react-bootstrap';
import NumberFormat from 'react-number-format';
import {ResolveImage} from './ImageResolver';
import TooltipTarjeta from '../../components/CreditCard/Tooltip';

class CardNumberFormRow extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      fields: {
        cardNumber: {val: '', validationState: null, complete: null},
        cardDue: {val: '', validationState: null, complete: null},
        cardCVC: {val: '', validationState: null, complete: null},
        cardOption: {val: '', validationState: null, complete: null},
        cardTitular: {val: '', validationState: null, complete: null},
        cardDNI: {val: '', validationState: null, complete: null},
        cardSexo: {val: '', validationState: null, complete: null},
      },
      validForm: false
    };
  }
  render() {
    return (
      <div>
      <Row>
        <Col sm={5}>
          <FormGroup className={this.props.cardNumber.complete ? 'cont-input-creditcard active' : 'cont-input-creditcard' } validationState={this.props.cardNumber.validationState}>
            <NumberFormat
              format="################"
              mask=""
              placeholder="*Número"
              className="form-control"
              name="cardNumber"
              onChange={this.props.handleChange}
              required
            />

            { this.props.cardNumber.val >= 3000000000000000 && this.props.cardNumber.val <= 3999999999999999 ? ResolveImage('amex') : '' }
            { this.props.cardNumber.val >= 4000000000000000 && this.props.cardNumber.val <= 4999999999999999 ? ResolveImage('visa') : '' }
            { this.props.cardNumber.val >= 5000000000000000 && this.props.cardNumber.val <= 5999999999999999 ? ResolveImage('master') : '' }
            { this.props.cardNumber.val >= 6000000000000000 && this.props.cardNumber.val <= 6999999999999999 ? ResolveImage('cabal') : '' }
            { this.props.cardNumber.val >= 300000000000000 && this.props.cardNumber.val <= 399999999999999 ? ResolveImage('diners') : '' }
            
               
              
          </FormGroup>
        </Col>

        <Col xs={6} sm={4}>
          <FormGroup className={this.props.cardDue.complete ? 'calendar active' : 'calendar' } validationState={this.props.cardDue.validationState}>
            <NumberFormat
              format="##/##"
              placeholder="*Fecha"
              className="form-control"
              name="cardDue"
              onChange={this.props.handleChange}
              required
            />
            <i className="fa fa-calendar"/>
          </FormGroup>
        </Col>

        <Col xs={4} sm={2}>
          <FormGroup className={this.props.cardCVC.complete ? 'active' : '' } validationState={this.props.cardCVC.validationState}>
            <NumberFormat
              format="###"
              placeholder="*CVC"
              className="form-control"
              name="cardCVC"
              type="password"
              onChange={this.props.handleChange}
              required
            />
          </FormGroup>
        </Col>
        <Col xs={2} sm={1}><TooltipTarjeta position={"top"}/></Col>
        </Row>
        <Row>
        <Col md={6} lg={4}>
          <FormGroup className={this.props.cardTitular.complete ? 'active' : '' }  validationState={this.props.cardTitular.validationState}>
            <FormControl
              type="text"
              placeholder="Titular de la tarjeta"
              name="cardTitular"
              onChange={this.props.handleChange}
              required
            />
          </FormGroup>
          </Col>
        <Col md={6} lg={4}>
          <FormGroup className={this.props.cardDNI.complete ? 'active' : '' }  validationState={this.props.cardDNI.validationState}>
            <NumberFormat
              format="########"
              placeholder="DNI del titular"
              className="form-control"
              name="cardDNI"
              onChange={this.props.handleChange}
              required
            />
          </FormGroup>
          </Col>
          
          <Col md={6} lg={4}>
            <FormGroup>
            <Radio name="gender" inline value="Femenino" onChange={this.handleChange}>
              Femenino
            </Radio>
            {' '}
            <Radio name="gender" inline value="Masculino" onChange={this.handleChange}>
              Masculino
            </Radio>
          </FormGroup>
          </Col>
      </Row>
      </div>
    );
  }
}

CardNumberFormRow.propTypes = {
  cardName: PropTypes.object,
  cardNumber: PropTypes.object,
  cardDue: PropTypes.object,
  cardCVC: PropTypes.object,
  cardTitular: PropTypes.object,
  cardDNI: PropTypes.object,
  handleChange: PropTypes.func,
};


export default CardNumberFormRow;
