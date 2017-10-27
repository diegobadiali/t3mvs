import React from 'react';
import Modal from 'react-modal';
import { Row, Col, Checkbox, Radio, FormControl, FormGroup, ControlLabel, HelpBlock } from 'react-bootstrap';
import './FormTarjetasPromos.css';
import amex from '../../assets/img/amex.png';
import cabal from '../../assets/img/cabal.png';
import diners from '../../assets/img/diners.png';
import master from '../../assets/img/master.png';
import visa from '../../assets/img/visa.png';
import pagofacil from '../../assets/img/pagofacil.png';
import rapipago from '../../assets/img/rapipago.png';
function FieldGroup({ id, ...props }) {
  return (
    <FormGroup controlId={id}>
      <FormControl {...props} />
    </FormGroup>
  );
}
class FormTarjetasPromos extends React.Component {
  render() {
    return (
      <div className="tarjetas-promos">
       <form>
        <Row>
        <Col sm={6}>
        <p>Tarjeta de crédito</p>
        <FormGroup>
          <Radio name="radioGroup" title="Visa" inline>
            <img src={visa} className="credit-card" alt="Visa" />
          </Radio>
          <Radio name="radioGroup" title="Mastercard" inline>
            <img src={master} className="credit-card" alt="Mastercard" />
          </Radio>
          <Radio name="radioGroup" title="Amex" inline>
            <img src={amex} className="credit-card" alt="Amex" />
          </Radio>
          <Radio name="radioGroup" title="Cabal" inline>
            <img src={cabal} className="credit-card" alt="Cabal" />
          </Radio>
        </FormGroup>
        </Col>
        <Col sm={6}>
          <a href="#" className="verpromos">Ver promociones sin interés <i className="fa fa-angle-right"></i></a>
        </Col>
        </Row>
        <Row>
        <Col sm={6}>
          <FormGroup controlId="formControlsSelect">
            <FormControl componentClass="select" placeholder="Banco">
            <option disabled defaultValue>Banco</option>
            <optgroup label="Hasta 12 cuotas sin interés">
              <option value="">Banco Supervielle</option>
              <option value="">Banco Patagonia</option>
              <option value="">Banco Columbia</option>
              </optgroup>
              <optgroup label="Hasta 6 cuotas sin interés">
              <option value="">Nativa Mastercard</option>
              </optgroup>
            </FormControl>
            <i className="fa fa-angle-down"></i> 
          </FormGroup>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col sm={6}>
        <p>Efectivo</p>
        <FormGroup>
          <Radio name="radioGroup" title="Pago Facil" inline>
            <img src={pagofacil} className="credit-card" alt="Pago Facil" />
          </Radio>
          <Radio name="radioGroup" title="Rapipago" inline>
            <img src={rapipago} className="credit-card fix-rapipago" alt="Rapipago" />
          </Radio>
        </FormGroup>
        </Col>
        </Row>
        <div className="foot-form">
          <label>Pagás: 
          <FormGroup controlId="formControlCuotas">
          <FormControl componentClass="select" placeholder="12">
            <option value="">12</option>
            <option value="">6</option>
          </FormControl>
          <i className="fa fa-angle-down"></i> 
          </FormGroup>
          x <span className="importe">$2.371,00</span> <span className="cft">CFT: 57,03%</span></label>
        </div>
      </form>
    </div>
    );
  }
}
export default FormTarjetasPromos;
