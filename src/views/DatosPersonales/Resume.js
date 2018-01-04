import React from 'react';
import {Col, Row, FormControl, FormGroup, Button} from 'react-bootstrap';
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
            <ul>
              <li>{this.props.firstname + ' ' + this.props.lastname}</li>
              <li>DNI: {this.props.dni}</li>
              <li>Fecha de nacimiento: {moment(this.props.birthday).format('DD/MM/YYYY')}</li>
              <li>Sexo: {this.props.gender}</li>
              { !this.props.isLoggedIn ? (
              <li>Teléfono de contacto: ({this.props.codarea}) {this.props.phone}</li>
               ) : (null)
              }
              <li>Email: {this.props.email}</li>
            </ul>
          </div>
          <Button bsStyle="success" onClick={this.props.handleNext}>Continuar</Button>
        </Col>
        </Row>
      </div>
    );
  }
}
export default Resume;