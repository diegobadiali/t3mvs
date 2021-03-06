import React from 'react';
import {Col, Row, FormControl, FormGroup, HelpBlock} from 'react-bootstrap';
import NumberFormat from 'react-number-format';
import {simpleValidation} from '../../utils/validators';

class BillingAddressForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fields: {
        street: {val: props.userData.street, validationState: null, complete: null},
        number: {val: props.userData.number, validationState: null, complete: null},
        floor: {val: props.userData.floor, validationState: null, complete: null},
        apartment: {val: props.userData.apartment, validationState: null, complete: null},
        locality: {val: props.userData.locality, validationState: null, complete: null},
        city: {val: props.userData.city, validationState: null, complete: null},
        postalCode: {val: props.userData.zipcode, validationState: null, complete: null},
        comments: {val: '', validationState: null, complete: null},
        entrecalles: {val: props.userData.entrecalles, validationState: null, complete: null},
        lineSameAsBillingAddress: {val: true},
        willBeUsedIn: {val: 'caba'},
        willBeUsedInLocality: {val: '', validationState: null, complete: null},
        nombreautorizado: {val: '', validationState: null, complete: null},
        apellidoautorizado: {val: '', validationState: null, complete: null},
        dniautorizado: {val: '', validationState: null, complete: null},
      },
      validForm: false
    };
  }

  fakeValidation = (props) => {
    let isValid = true;

    if (props.key == 'street') {
      isValid = props.val.length > 0;
    }

    return isValid;
  };

  handleChange = (e) => {
    let newFields = Object.assign({}, this.state.fields);

    /* FIXME: Get Fake Field validation */
    let isValid = simpleValidation(e.target);

    // let newField = Object.assign({}, newFields[e.target.name]);
    // newField.val = e.target.value;
    // newField.validationState = isValid ? null : 'error';

    //newFields[e.target.name] = newField;

    this.props.isSelectedAdress();

    newFields[e.target.name] = {
      //val: e.target.value,
      validationState: isValid ? null : 'error',
      complete: true
    };

    this.setState({
      fields: newFields
    });

    this.props.handleUserDataChange(e.target.name, e.target.value);
    //this.props.handleStatus(isValid);

  };

  render() {
    return (
      <div>
        <Row>
          <Col sm={12} md={6}>
            <FormGroup validationState={this.state.fields.street.validationState} className={this.state.fields.street.complete ? 'active' : '' }>
              <FormControl
                type="text"
                placeholder="*Calle"
                value={this.state.fields.street.val}
                name="street"
                onBlur={this.handleChange}
                required
              />
              <HelpBlock className="help-block-error">Ingresá la calle</HelpBlock>
            </FormGroup>
          </Col>
          <Col sm={6} md={2}>
            <FormGroup validationState={this.state.fields.number.validationState} className={this.state.fields.number.complete ? 'active' : '' }>
              <NumberFormat
              id="number"
              className="form-control"
              name="number"
              placeholder="*Número"
              format="######"
              onBlur={this.handleChange}
              value={this.state.fields.number.val}
              required
            />
            <HelpBlock className="help-block-error">Ingresá el número</HelpBlock>
            </FormGroup>
          </Col>
          <Col sm={6} md={2}>
            <FormGroup validationState={this.state.fields.floor.validationState} className={this.state.fields.floor.complete ? 'active' : '' }>
              <FormControl
                type="text"
                placeholder="Piso"
                value={this.state.fields.floor.val}
                name="floor"
                onBlur={this.handleChange}
              />
            </FormGroup>
          </Col>
          <Col sm={6} md={2}>
            <FormGroup validationState={this.state.fields.apartment.validationState} className={this.state.fields.apartment.complete ? 'active' : '' }>
              <FormControl
                type="text"
                placeholder="Depto"
                value={this.state.fields.apartment.val}
                name="apartment"
                onBlur={this.handleChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          
          <Col sm={12} md={6}>
            <FormGroup validationState={this.state.fields.city.validationState} className={this.state.fields.city.complete ? 'active' : '' }>
              <FormControl
                componentClass="select"
                placeholder="*Provincia"
                value={this.state.fields.city.val}
                name="city"
                onBlur={this.handleChange}
              >
                <option value="" disabled selected>*Seleccioná tu provincia</option>
                        <option value="Capital Federal">Capital Federal</option>
                        <option value="Buenos Aires">Buenos Aires</option>
                        <option value="Catamarca">Catamarca</option>
                        <option value="Chaco">Chaco</option>
                        <option value="Chubut">Chubut</option>
                        <option value="Córdoba">Córdoba</option>
                        <option value="Corrientes">Corrientes</option>
                        <option value="Entre Rios">Entre Rios</option>
                        <option value="Formosa">Formosa</option>
                        <option value="Jujuy">Jujuy</option>
                        <option value="La Pampa">La Pampa</option>
                        <option value="La Ríoja">La Ríoja</option>
                        <option value="Mendoza">Mendoza</option>
                        <option value="Misiones">Misiones</option>
                        <option value="Neuquén">Neuquén</option>
                        <option value="Rio Negro">Rio Negro</option>
                        <option value="Salta">Salta</option>
                        <option value="San Juan">San Juan</option>
                        <option value="San Luis">San Luis</option>
                        <option value="Santa Cruz">Santa Cruz</option>
                        <option value="Santa Fe">Santa Fe</option>
                        <option value="Santiago del Estero">Santiago del Estero</option>
                        <option value="Tierra del Fuego">Tierra del Fuego</option>
                        <option value="Tucumán">Tucumán</option>
              </FormControl>
              <i className="fa fa-angle-down"></i> 
            </FormGroup>
          </Col>
          <Col sm={12} md={6}>
            <FormGroup validationState={this.state.fields.locality.validationState} className={this.state.fields.locality.complete ? 'active' : '' }>
              <FormControl
                componentClass="select"
                placeholder="*Ciudad/Localidad"
                value={this.state.fields.locality.val}
                name="locality"
                onBlur={this.handleChange}
                required
              >
                <option value="">*Seleccioná tu ciudad/localidad</option>
                <option value="Ciudad 1">Ciudad 1</option>
                <option value="Ciudad 2">Ciudad 2</option>
                <option value="Ciudad 3">Ciudad 3</option>
                <option value="Ciudad 4">Ciudad 4</option>
              </FormControl>
              <i className="fa fa-angle-down"></i>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={3}>
            <FormGroup validationState={this.state.fields.postalCode.validationState} className={this.state.fields.postalCode.complete ? 'active' : '' }>
              <FormControl
                type="text"
                placeholder="*Código postal"
                value={this.state.fields.postalCode.val}
                name="postalCode"
                onBlur={this.handleChange}
                required
              />
              <HelpBlock className="help-block-error">Ingresá el código postal</HelpBlock>
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
            <FormGroup validationState={this.state.fields.entrecalles.validationState} className={this.state.fields.entrecalles.complete ? 'active' : '' }>
              <FormControl
                type="text"
                placeholder="Entre calles, manzana, lote, parcela, barrio cerrado, etc."
                name="entrecalles"
                onBlur={this.handleChange}
              />
            </FormGroup>
          </Col>
        </Row> 
        {this.props.isOtherAddress ? (
          <Row>
          <Col sm={12}><h4>Datos del autorizado</h4></Col>
          <Col sm={12} md={6}>
            <FormGroup className={this.state.fields.nombreautorizado.complete ? 'active' : '' }>
              <FormControl
                type="text"
                placeholder="Nombre del autorizado"
                name="nombreautorizado"
                onBlur={this.handleChange}
              />
            </FormGroup>
          </Col>
          <Col sm={12} md={6}>
            <FormGroup className={this.state.fields.apellidoautorizado.complete ? 'active' : '' }>
              <FormControl
                type="text"
                placeholder="Apellido del autorizado"
                name="apellidoautorizado"
                onBlur={this.handleChange}
              />
            </FormGroup>
          </Col>
          <Col sm={12} md={6}>
            <FormGroup className={this.state.fields.dniautorizado.complete ? 'active' : '' }>
              <FormControl
                type="text"
                placeholder="DNI del autorizado"
                name="dniautorizado"
                onBlur={this.handleChange}
              />
            </FormGroup>
          </Col>
        </Row>  
          ) : (
          '')
        }
        
      </div>
    );
  }
}
export default BillingAddressForm;