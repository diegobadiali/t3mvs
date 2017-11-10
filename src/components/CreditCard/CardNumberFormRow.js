import React from 'react';
import PropTypes from 'prop-types';
import {Col, Row, FormGroup, FormControl, Radio} from 'react-bootstrap';
import NumberFormat from 'react-number-format';
import {ResolveImage} from './ImageResolver';
import TooltipTarjeta from '../../components/CreditCard/Tooltip';
import './Form.css';

class CardNumberFormRow extends React.Component {

  render() {
    return (
      <Row>
        <Col sm={5}>
          <FormGroup className="cont-input-creditcard" validationState={this.props.cardNumber.validationState}>
            <NumberFormat
              format="#### #### #### ####"
              placeholder="*Número"
              className="form-control"
              name="cardNumber"
              mask="_"
              onChange={this.props.handleChange}
              required
            />
            {ResolveImage(this.props.cardName.val)}
          </FormGroup>
        </Col>

        <Col xs={6} sm={4}>
          <FormGroup className="calendar" validationState={this.props.cardDue.validationState}>
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
          <FormGroup validationState={this.props.cardCVC.validationState}>
            <NumberFormat
              format="###"
              placeholder="*CVC"
              className="form-control"
              name="cardDue"
              type="password"
              onChange={this.props.handleChange}
              required
            />
          </FormGroup>
        </Col>
        <Col xs={2} sm={1}><TooltipTarjeta position={"top"}/></Col>
        <Col md={6} lg={4}>
          <FormGroup validationState={this.props.cardTitular.validationState}>
            <FormControl
              type="text"
                placeholder="Titular de la tarjeta"
                name="titular"
                onChange={this.handleChange}
            />
          </FormGroup>
          </Col>
        <Col md={6} lg={4}>
          <FormGroup validationState={this.props.cardDNI.validationState}>
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
