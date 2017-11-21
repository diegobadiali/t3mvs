import React from 'react';
import {Col, Row, FormControl, FormGroup} from 'react-bootstrap';
import moment from 'moment';
class Resume extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      codarea: {val: props.codarea, validationState: null},
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
            <a className="btn btn-link pull-right" onClick={this.props.handleData}>
                <i className="fa fa-pencil"></i>
            </a>
            <ul>
              <li>{this.props.firstname + ' ' + this.props.lastname}</li>
              <li>DNI: {this.props.dni}</li>
              <li>Fecha de nacimiento: {moment(this.props.birthday).format('DD/MM/YYYY')}</li>
              <li>{this.props.gender}</li>
            </ul>
          </div>
        </Col>
        </Row>
        
        { !this.props.isLoggedIn ? (
        <Row>
        <Col xs={5} sm={4} md={2}>
          <FormGroup className={this.props.codarea ? 'codarea active' : 'codarea' } validationState={this.state.codarea.validationState}>
            <FormControl
              id="dataArea"
              placeholder="Cód. Área"
              name="codarea"
              value={this.props.codarea}
            />
          </FormGroup>
        </Col>
        <Col xs={7} sm={8} md={4}>
          <FormGroup className={this.props.phone ? 'numero active' : 'numero' } validationState={this.state.phone.validationState}>
            <FormControl
              id="dataPhone"
              placeholder="Teléfono de contacto"
              name="phone"
              value={this.props.phone}
            /> 
          </FormGroup>
        </Col>
        </Row>
        ) : (null)
      }
        
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

      </div>
    );
  }
}
export default Resume;