import React from 'react';
import PropTypes from 'prop-types';
import {Col, Row, FormGroup, FormControl} from 'react-bootstrap';

class CardSelectFormRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        cardName: {val: '', validationState: null, complete: null},
        cardBank: {val: '', validationState: null, complete: null},
        instalments: {val: 1, validationState: null, complete: null},
      },
      validForm: false
    };
  }
  render() {
    return (

      <Row>
        <Col sm={6}>
          <FormGroup className={this.props.cardName.complete ? 'active' : '' } validationState={this.props.cardName.validationState}>
            <FormControl
              componentClass="select"
              placeholder="Seleccioná una tarjeta"
              name="cardName"
              onChange={this.props.handleChange}
            >
              <option disabled selected>Seleccioná una tarjeta</option>
              <option value="visa">Visa</option>
              <option value="master">Mastercard</option>
              <option value="amex">Amex</option>
              <option value="cabal">Cabal</option>
              <option value="diners">Diners</option>
            </FormControl>
            <i
              className="fa fa-angle-down"
            />
          </FormGroup>
        </Col>

        <Col sm={4}>
          <FormGroup className={this.props.cardBank.complete ? 'active' : '' } validationState={this.props.cardBank.validationState}>
            <FormControl
              componentClass="select"
              placeholder="Seleccioná un banco"
              name="cardBank"
              onChange={this.props.handleChange}
              
            >
            <option disabled selected>Seleccioná un Banco</option>
              <option value="Banco 1">Banco 1</option>
              <option value="Banco 2">Banco 2</option>
            </FormControl>
            <i
              className="fa fa-angle-down"
            />
          </FormGroup>
        </Col>
        {
          this.props.instalments ? (
              <Col sm={2}>
                <FormGroup className={this.props.instalments.complete ? 'active' : '' } validationState={this.props.instalments.validationState}>
                  <FormControl
                    componentClass="select"
                    placeholder="*Cuotas"
                    name="instalments"
                    onChange={this.props.handleInstalmentChange}
                  >
                    <option disabled selected>Cuotas</option>
                    <option value={1}>1 cuota</option>
                    <option value={2}>2 cuotas</option>
                    <option value={3}>3 cuotas</option>
                  </FormControl>
                  <i
                    className="fa fa-angle-down"
                  />
                </FormGroup>
              </Col>
            ) : (null)
        }
      </Row>
    );
  }
}

CardSelectFormRow.propTypes = {
  cardName: PropTypes.object,
  cardBank: PropTypes.object,
  instalments: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object
  ]),
  handleChange: PropTypes.func,
  handleInstalmentChange: PropTypes.func,
};


export default CardSelectFormRow;
