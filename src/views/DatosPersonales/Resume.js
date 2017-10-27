import React from 'react';
import {Col, Row, FormControl, FormGroup, HelpBlock, Button} from 'react-bootstrap';
import moment from 'moment';

class Resume extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      phone: {val: props.phone, validationState: null},
      email: {val: props.email, validationState: null},
      validForm: false
    };
  }

  handleChange = (event) => {

    this.setState({
      email: {
        validationState: null,
        val: event.target.value
      },
    });
  };

  render() {
    return (
      <div>
      <Row>
        <Col sm={12}>
          <div className="datos-cargardos">
            <ul>
              <li>{this.props.firstname + ' ' + this.props.lastname}</li>
              <li>DNI: {this.props.dni}</li>
              <li>Fecha de nacimiento: {moment(this.props.birthday).format('DD/MM/YYYY')}</li>
              <li>{this.props.gender}</li>
            </ul>
          </div>
          <span className="help">*Todos los campos son obligatorios</span>
        </Col>
        </Row>
        <Row>
        <Col sm={12} md={6}>
          <FormGroup validationState={this.state.phone.validationState} className={this.props.phone?'active':''}>
            <FormControl
              id="dataPhone"
              type="text"
              placeholder="Teléfono"
              value={this.props.phone}
              name="phone"
              onChange={this.handleChange }
              className="form-control-icon"
            />
            <i className="fa fa-phone"></i> 
          </FormGroup>
        </Col>
        </Row>
        <Row>
        <Col sm={12} md={6}>
          <FormGroup validationState={this.state.email.validationState} className={this.props.phone?'active':''}>
            <FormControl
              id="dataEmail"
              type="email"
              placeholder="E-mail"
              value={this.props.email}
              name="email"
              onChange={this.handleChange}
              className="form-control-icon"
            />
            <i className="fa fa-at"></i> 
          </FormGroup>
        </Col>
        <Col sm={12} md={6}>
          <div className="msg">
            <p><strong>En esta dirección vas a recibir:</strong></p>
            <ul className="list-unstyled">
              <li>- Información de tu pedido</li>
              <li>- Factura mensual y notificaciones</li>
            </ul>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <Button bsStyle="success">Continuar</Button>
        </Col>
      </Row>
      </div>
    );
  }
}
export default Resume;