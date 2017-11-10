import React from 'react';
import {Col, Row, FormControl, FormGroup, Radio, Button} from 'react-bootstrap';
import {simpleValidation} from '../../utils/validators';
import './OptionsAddress.css';

class OptionsAddress extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fields: {
        willBeUsedIn: {val: ''},
        willBeUsedInLocality: {val: '', validationState: null},
        isSelectedAddress: false,
        optionSelected: false
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

    this.setState({
      fields: newFields,
      isSelectedAddress: true
    });
    
  };

  render() {
    return (
          <Row>
            <Col sm={12}>
              <div className="cont-options-address">
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
                  </FormGroup>
                  <FormGroup>
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
                <Button bsStyle="success" disabled={this.state.isSelectedAddress ? '' : 'disabled' } onClick={this.handlePlanes}>Ver planes</Button>
                <div className="clearfix"></div>
              </div>
            </Col>
          </Row>
    );
  }
}
export default OptionsAddress;