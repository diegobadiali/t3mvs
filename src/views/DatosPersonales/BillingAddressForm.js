import React from 'react';
import {Col, Row, FormControl, FormGroup} from 'react-bootstrap';
import {simpleValidation} from '../../utils/validators';

class BillingAddressForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fields: {
        street: {val: props.userData.street, validationState: null},
        number: {val: props.userData.number, validationState: null},
        floor: {val: props.userData.floor, validationState: null},
        apartment: {val: props.userData.apartment, validationState: null},
        locality: {val: props.userData.locality, validationState: null},
        city: {val: props.userData.city, validationState: null},
        postalCode: {val: props.userData.zipcode, validationState: null},
        comments: {val: '', validationState: null},
        entrecalles: {val: props.userData.entrecalles, validationState: null},
        lineSameAsBillingAddress: {val: true},
        willBeUsedIn: {val: 'caba'},
        willBeUsedInLocality: {val: '', validationState: null},
        nombreautorizado: {val: '', validationState: null},
        apellidoautorizado: {val: '', validationState: null},
        dniautorizado: {val: '', validationState: null},
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

    this.props.handleUserDataChange(e.target.name, e.target.value);
    //this.props.handleStatus(isValid);

  };

  render() {
    return (
      <div>
        <Row>
          <Col sm={12} md={6}>
            <FormGroup validationState={this.state.fields.street.validationState}>
              <FormControl
                type="text"
                placeholder="*Calle"
                value={this.state.fields.street.val}
                name="street"
                onChange={this.handleChange }
                required
              />
            </FormGroup>
          </Col>
          <Col sm={6} md={2}>
            <FormGroup validationState={this.state.fields.number.validationState}>
              <FormControl
                type="number"
                placeholder="*Número"
                value={this.state.fields.number.val}
                name="number"
                onChange={this.handleChange}
                required
              />
            </FormGroup>
          </Col>
          <Col sm={6} md={2}>
            <FormGroup validationState={this.state.fields.floor.validationState}>
              <FormControl
                type="text"
                placeholder="Piso"
                value={this.state.fields.floor.val}
                name="floor"
                onChange={this.handleChange}
              />
            </FormGroup>
          </Col>
          <Col sm={6} md={2}>
            <FormGroup validationState={this.state.fields.apartment.validationState}>
              <FormControl
                type="text"
                placeholder="Depto"
                value={this.state.fields.apartment.val}
                name="apartment"
                onChange={this.handleChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={6}>
            <FormGroup validationState={this.state.fields.locality.validationState}>
              <FormControl
                componentClass="select"
                placeholder="*Localidad"
                value={this.state.fields.locality.val}
                name="locality"
                onChange={this.handleChange}
                required
              >
                <option value="">*Localidad</option>
                <option value="1">Localidad 1</option>
                <option value="2">Localidad 2</option>
                <option value="3">Localidad 3</option>
              </FormControl>
              <i className="fa fa-angle-down"></i>
            </FormGroup>
          </Col>
          <Col sm={12} md={6}>
            <FormGroup validationState={this.state.fields.city.validationState}>
              <FormControl
                componentClass="select"
                placeholder="*Provincia/Ciudad"
                value={this.state.fields.city.val}
                name="city"
                onChange={this.handleChange}
              >
                <option value="">*Provincia/Ciudad</option>
                <option value="1">Ciudad 1</option>
                <option value="2">Ciudad 2</option>
                <option value="3">Ciudad 3</option>
              </FormControl>
              <i className="fa fa-angle-down"></i> 
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={3}>
            <FormGroup validationState={this.state.fields.postalCode.validationState}>
              <FormControl
                type="text"
                placeholder="*Código postal"
                value={this.state.fields.postalCode.val}
                name="postalCode"
                onChange={this.handleChange}
              />
            </FormGroup>
          </Col>
          <Col sm={12} md={9}>
            <a className="btn btn-link">
              No conozco mi código postal
              {' '}
              
            </a>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <FormGroup validationState={this.state.fields.entrecalles.validationState}>
              <FormControl
                type="text"
                placeholder="Entre calles, manzana, lote, parcela, barrio cerrado, etc."
                value={this.state.fields.entrecalles.val}
                name="calles"
                onChange={this.handleChange}
              />
            </FormGroup>
          </Col>
        </Row> 
        <Row>
          <Col sm={12}><h4>Datos del autorizado</h4></Col>
          <Col sm={12} md={6}>
            <FormGroup>
              <FormControl
                type="text"
                placeholder="Nombre del autorizado"
                value={this.state.fields.nombreautorizado.val}
                name="nombreautorizado"
                onChange={this.handleChange}
              />
            </FormGroup>
          </Col>
          <Col sm={12} md={6}>
            <FormGroup>
              <FormControl
                type="text"
                placeholder="Apellido del autorizado"
                value={this.state.fields.apellidoautorizado.val}
                name="apellidoautorizado"
                onChange={this.handleChange}
              />
            </FormGroup>
          </Col>
          <Col sm={12} md={6}>
            <FormGroup>
              <FormControl
                type="text"
                placeholder="DNI del autorizado"
                value={this.state.fields.dniautorizado.val}
                name="dniautorizado"
                onChange={this.handleChange}
              />
            </FormGroup>
          </Col>
        </Row>  
      </div>
    );
  }
}
export default BillingAddressForm;