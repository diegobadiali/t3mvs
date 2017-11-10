import React from 'react';
import {Col, Row, FormControl, FormGroup, Radio, Checkbox, Collapse} from 'react-bootstrap';
import {simpleValidation} from '../../utils/validators';

class Resume extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fields: {
        lineSameAsBillingAddress: {val: true},
        willBeUsedIn: {val: 'caba'},
        willBeUsedInLocality: {val: '', validationState: null},
      },
      validForm: false
    };
  }

  handleLineSameAsChange = (e) => {
    let newFields = Object.assign({}, this.state.fields);
    newFields.lineSameAsBillingAddress.val = e.target.checked;
    this.setState({fields: newFields});
  };

  handleChange = (e) => {
    let newFields = Object.assign({}, this.state.fields);

    let isValid = simpleValidation(e.target);

    let newField = Object.assign({}, newFields[e.target.name]);
    newField.val = e.target.value;
    newField.validationState = isValid ? null : 'error';

    newFields[e.target.name] = newField;

    this.setState({fields: newFields});

    this.props.handleUserDataChange(e.target.name, e.target.value);
  };

  render() {
    return (
      <div>
        <Row>
          <Col sm={12}>
            <Checkbox
              name="lineSameAsBillingAddress"
              onChange={this.handleLineSameAsChange}
              checked={this.state.fields.lineSameAsBillingAddress.val}
            >
              Voy a usar la línea en la misma localidad de está dirección

            </Checkbox>
          </Col>
        </Row>
        <Collapse in={!this.state.fields.lineSameAsBillingAddress.val}>
          <Row>
            <Col sm={12}>
              <div className="cont-border">
                <h4>¿Dónde vas a usar la nueva línea?</h4>
                <FormGroup>
                  <Radio name="willBeUsedIn"
                         value="caba" onChange={this.handleChange}
                         checked={this.state.fields.willBeUsedIn.val == 'caba'}
                  >
                    Capital Federal
                  </Radio>
                  <Radio name="willBeUsedIn" value="gba" onChange={this.handleChange}
                         checked={this.state.fields.willBeUsedIn.val == 'gba'}
                  >
                    Gran Buenos Aires
                  </Radio>
                  <Radio name="willBeUsedIn" value="otra" onChange={this.handleChange}
                         checked={this.state.fields.willBeUsedIn.val == 'otra'}
                  >
                    Otra localidad
                  </Radio>
                  {
                    this.state.fields.willBeUsedIn.val == 'otra' ? (
                        <FormControl
                          type="text"
                          placeholder="Escribí la localidad"
                          value={this.state.fields.willBeUsedInLocality.val}
                          name="willBeUsedInLocality"
                          onChange={this.handleChange}
                        />
                      ) : null
                  }
                </FormGroup>
              </div>
            </Col>
          </Row>
        </Collapse>
      </div>
    );
  }
}
export default Resume;