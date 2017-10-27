import React from 'react';
import PropTypes from 'prop-types';
import {Col, Row, FormGroup, FormControl} from 'react-bootstrap';
import './Form.css';

class CardSelectFormRow extends React.Component {

  render() {
    return (

      <Row>
        <Col sm={6}>
          <FormGroup validationState={this.props.cardName.validationState}>
            <FormControl
              componentClass="select"
              placeholder="*Tarjeta"
              value={this.props.cardName.val}
              name="cardName"
              onChange={this.props.handleChange}
              required
            >
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
          <FormGroup validationState={this.props.cardBank.validationState}>
            <FormControl
              componentClass="select"
              placeholder="*Banco"
              value={this.props.cardBank.val}
              name="locality"
              onChange={this.props.handleChange}
              required
            >
              <option value="">Banco 1</option>
              <option value="1">Banco 2</option>
            </FormControl>
            <i
              className="fa fa-angle-down"
            />
          </FormGroup>
        </Col>
        {
          this.props.instalments ? (
              <Col sm={2}>
                <FormGroup validationState={this.props.instalments.validationState}>
                  <FormControl
                    componentClass="select"
                    placeholder="*Cuotas"
                    value={this.props.instalments.val}
                    name="instalments"
                    onChange={this.props.handleInstalmentChange}
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
