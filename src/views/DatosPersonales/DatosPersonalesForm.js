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
      fields: {
        firstname: {val: '', validationState: null},
        lastname: {val: '', validationState: null},
        dni: {val: '', validationState: null},
        birthday: {val: null, validationState: null},
        phone: {val: '', validationState: null},
        email: {val: '', validationState: null},
        gender: {val: '', validationState: null}
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
      validationState: isValid ? null : 'error'
    };

    this.setState({fields: newFields});

    this.props.handleUserDataChange(e.target.name, e.target.value);
    this.props.handleStatus(isValid);
  };

  handleDateChange = (date) => {

    let newFields = Object.assign({}, this.state.fields);
    newFields.birthday = {
      val: date,
      validationState: null
    };
    this.setState({fields: newFields});
  };

  render() {
    return (
      <div>
      <Row>

        <Col sm={12} md={6}>
          <FormGroup validationState={this.state.fields.firstname.validationState}>
            <FormControl
              id="dataName"
              name="firstname"
              type="text"
              placeholder="Nombre"
              onChange={this.handleChange}
              required
            />
          </FormGroup>
        </Col>

        <Col sm={12} md={6}>
          <FormGroup validationState={this.state.fields.lastname.validationState}>
            <FormControl
              id="dataLastname"
              name="lastname"
              type="text"
              placeholder="Apellido"
              onChange={this.handleChange}
              required
            />
          </FormGroup>
        </Col>

        <Col sm={12} md={6}>
          <FormGroup validationState={this.state.fields.dni.validationState}>
            <NumberFormat
              id="dataDni"
              className="form-control"
              name="dni"
              placeholder="DNI"
              thousandSeparator={'.'}
              decimalSeparator={','}
              onChange={this.handleChange}
              required
            />
          </FormGroup>
        </Col>

        <Col sm={12} md={6}>
          <FormGroup className="calendar" validationState={this.state.fields.birthday.validationState}>
            <DatePicker
              selected={this.state.fields.birthday.val}
              name="birthday"
              onChange={this.handleDateChange}
              showYearDropdown
              dateFormat="DD/MM/YYYY"
              scrollableYearDropdown
              yearDropdownItemNumber={15}
              className="form-control"
              placeholderText="Fecha de nacimiento"
            />
            <i className="fa fa-calendar"></i>
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
        <Col sm={12} md={6}>
          <FormGroup validationState={this.state.fields.phone.validationState}>
            <NumberFormat
              id="dataPhone"
              className="form-control form-control-icon"
              type="tel"
              format="##########"
              placeholder="Teléfono"
              name="phone"
              onChange={this.handleChange}
            />
            <i className="fa fa-phone"></i> 
            <HelpBlock>
              Ingresá el nº de línea con el código de área sin 0 ni 15.<br/>
              Ejemplo: 1185713957
            </HelpBlock>
          </FormGroup>
        </Col>
        </Row>
        <Row>
        <Col sm={12} md={6}>
          <FormGroup validationState={this.state.fields.email.validationState}>
            <FormControl
              id="dataEmail"
              type="email"
              placeholder="E-mail"
              name="email"
              className="form-control-icon"
              onChange={this.handleChange}
            />
            <i className="fa fa-at"></i>
            <HelpBlock>
              Ejemplo: usuario@gmail.com
            </HelpBlock>
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