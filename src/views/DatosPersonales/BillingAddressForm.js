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
        floor: {val: '', validationState: null},
        apartment: {val: '', validationState: null},
        locality: {val: '', validationState: null},
        city: {val: '', validationState: null},
        postalCode: {val: '', validationState: null},
        comments: {val: '', validationState: null},
        lineSameAsBillingAddress: {val: true},
        willBeUsedIn: {val: 'caba'},
        willBeUsedInLocality: {val: '', validationState: null},
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
    this.props.handleStatus(isValid);
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
              <i className="fa fa-angle-right"/>
            </a>
          </Col>
        </Row>

      </div>
    );
  }
}
export default BillingAddressForm;