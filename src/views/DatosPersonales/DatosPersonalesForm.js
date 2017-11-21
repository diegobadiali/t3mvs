import React from 'react';
import {Col, Row, FormControl, FormGroup, Radio, HelpBlock} from 'react-bootstrap';
import NumberFormat from 'react-number-format';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import {simpleValidation} from '../../utils/validators';
import 'react-datepicker/dist/react-datepicker.css';

class DatosPersonalesForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tipodoc: false,
      datepickerror: false,
      fields: {
        firstname: {val: '', validationState: null, complete: null},
        lastname: {val: '', validationState: null, complete: null},
        tipo: {val: '', validationState: null, complete: null},
        dni: {val: '', validationState: null, complete: null},
        birthday: {val: null, validationState: null, complete: null},
        codarea: {val: '', validationState: null, complete: null},
        phone: {val: '', validationState: null, complete: null},
        email: {val: '', validationState: null, complete: null},
        gender: {val: '', validationState: null, complete: null}
      },
      validForm: false
    };
  }

  /* FIXME: Get Fake Field validation */
  fakeValidation = (props) => {
    let isValid = true;

    if (props.key == 'lastname') {
      isValid = props.val.length > 0;
    }

    return isValid;
  };

  handleChange = (e) => {
    let newFields = Object.assign({}, this.state.fields);

    /* FIXME: Get Fake Field validation */
    let isValid = simpleValidation(e.target);

    newFields[e.target.name] = {
      val: e.target.value,
      validationState: isValid ? null : 'error',
      complete: true
    };

    this.setState({
      fields: newFields
    });

    this.props.handleUserDataChange(e.target.name, e.target.value);
    this.props.handleStatus(isValid);

  };

  handleDateChange = (date) => {

    let newFields = Object.assign({}, this.state.fields);
    newFields.birthday = {
      val: date,
      validationState: null,
      complete: true
    };
    this.setState({fields: newFields});
  };

   handleSelectChange = (e) => {
    this.setState({
      tipodoc: true
    })
   }

   handleOnBlur = (e) => {
    if (this.state.fields.birthday.val) {
        this.setState({
          datepickerror: false,
        })
        
    }
    else {
      this.setState({
          datepickerror: true
        })
    }
}
render() {
    return (
      <div>
      <Row>
        <Col sm={12} md={6}>
          <FormGroup className={this.state.fields.firstname.complete ? 'active' : '' } validationState={this.state.fields.firstname.validationState}>
            <FormControl
              id="dataName"
              name="firstname"
              type="text"
              placeholder="Nombre"
              onBlur={this.handleChange}
              required
            />
            <HelpBlock className="help-block-error">Debes ingresar tu nombre</HelpBlock>
          </FormGroup>
        </Col>

        <Col sm={12} md={6}>
          <FormGroup className={this.state.fields.lastname.complete ? 'active' : '' } validationState={this.state.fields.lastname.validationState}>
            <FormControl
              id="dataLastname"
              name="lastname"
              type="text"
              placeholder="Apellido"
              onBlur={this.handleChange}
              required
            />
            <HelpBlock className="help-block-error">Debes ingresar tu apellido</HelpBlock>
          </FormGroup>
        </Col>

        </Row>
        <Row>

        <Col sm={12} md={6}>
          <FormGroup className={this.state.tipodoc ? 'active' : '' } controlId="formControlsSelect" validationState={this.state.fields.tipo.validationState}>
            <FormControl componentClass="select" placeholder="Tipo de documento" onChange={this.handleSelectChange}>
              <option disabled selected>Seleccioná tipo de documento</option>
              <option value="">DNI</option>
              <option value="">Libreta Civica</option>
              <option value="">Libreta de Enrolamiento</option>
              <option value="">Cédula de Identidad</option>
              <option value="">Pasaporte</option>
            </FormControl>
            <i className="fa fa-angle-down"></i>
          </FormGroup> 
        </Col>

        <Col sm={12} md={6}>
          <FormGroup className={this.state.fields.dni.complete ? 'active' : '' } validationState={this.state.fields.dni.validationState}>
            <NumberFormat
              id="dataDni"
              className="form-control"
              name="dni"
              placeholder="DNI"
              format="########"
              thousandSeparator={'.'}
              decimalSeparator={','}
              onBlur={this.handleChange}
              required
            />
            <HelpBlock className="help-block-error">Debes ingresar tu documento</HelpBlock>
          </FormGroup>
        </Col>

        <Col sm={12} md={6}>
          <FormGroup className={this.state.fields.birthday.complete ? 'calendar active' : 'calendar' &&  this.state.datepickerror ? 'calendar has-error' : 'calendar'} validationState={this.state.fields.birthday.validationState}>
            <DatePicker
              selected={this.state.fields.birthday.val}
              name="birthday"
              onChange={this.handleDateChange}
              onBlur={this.handleOnBlur}
              showYearDropdown
              dateFormat="DD/MM/YYYY"
              scrollableYearDropdown
              yearDropdownItemNumber={15}
              className="form-control"
              placeholderText="Fecha de nacimiento"
              maxDate={moment().add(-18, "years")}
              locale="es-ES"
            />
            <i className="fa fa-calendar"></i>
            <HelpBlock className="help-block-error">Debes ingresar la fecha de nacimiento</HelpBlock>
          </FormGroup>
        </Col>

        <Col sm={12}>
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
        <Row>
        
        <Col xs={5} sm={4} md={2}>
          <FormGroup className={this.state.fields.codarea.complete ? 'codarea active' : 'codarea' } validationState={this.state.fields.codarea.validationState}>
            <NumberFormat
              id="dataArea"
              className="form-control form-inline"
              format="####"
              placeholder="Cód. Área"
              name="codarea"
              onBlur={this.handleChange}
              required
            />
            <HelpBlock>
              Ingresá el código de área sin 0.<br/>
              Ejemplo: 11
            </HelpBlock>
            <HelpBlock className="help-block-error">
              Debes ingresar el código de área
            </HelpBlock>
          </FormGroup>
        </Col>
        <Col xs={7} sm={8} md={4}>
          <FormGroup className={this.state.fields.phone.complete ? 'numero active' : 'numero' } validationState={this.state.fields.phone.validationState}>
            <NumberFormat
              id="dataPhone"
              className="form-control form-inline"
              format="########"
              placeholder="Teléfono de contacto"
              name="phone"
              onBlur={this.handleChange}
              required
            /> 
            <HelpBlock>
              Ingresá el nº de línea sin el 15.<br/>
              Ejemplo: 85713957
            </HelpBlock>
            <HelpBlock className="help-block-error">
              Debes ingresar el número
            </HelpBlock>
          </FormGroup>
        </Col>
        
        </Row>
        <Row>
        <Col sm={12} md={6}>
          <FormGroup className={this.state.fields.email.complete ? 'active' : '' } validationState={this.state.fields.email.validationState}>
            <FormControl
              id="dataEmail"
              type="email"
              placeholder="E-mail"
              name="email"
              className="form-control-icon"
              onBlur={this.handleChange}
            />
            <i className="fa fa-at"></i>
            <HelpBlock>
              Ejemplo: usuario@gmail.com
            </HelpBlock>
            <HelpBlock className="help-block-error">El email ingresado es incorrecto</HelpBlock>
            </FormGroup>
            </Col>
            <Col sm={12} md={6}>

            <strong>En esta dirección vas a recibir:</strong><br/>
            <ul className="list-unstyled">
              <li>- Información de tu pedido</li>
              <li>- Factura mensual y notificaciones</li>
            </ul>
          </Col> 
        </Row>
      </div>
    );
  }
}
export
default
DatosPersonalesForm;