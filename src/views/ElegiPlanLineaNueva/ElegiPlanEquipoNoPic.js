import React, { Component } from 'react';
import { Grid, Row, Col, FormControl, FormGroup, Radio, Button } from 'react-bootstrap';
import Pasos from '../../components/Pasos/Pasos';
import ProductDesc from '../../components/ProductDesc/ProductDesc';
import Tabs from '../../components/Tabs/Tabs';
import TabsMobile from '../../components/TabsMobile/TabsMobile';
import DataProducts from '../../DataProducts';
import {simpleValidation} from '../../utils/validators';
//import OptionsAddress from '../../components/OptionsAddress/OptionsAddress';
const prod = {
    product: {
      name: 'Samsung Galaxy S8 4G LTE Negro - 32GB',
      price: '$22.000,00',
      plan: 'Con planes desde $800',
      imgURL: '',
    }
  };
class FichaPlan extends Component {  

  constructor(props) {
    super(props);
    this.state = {
      planes: DataProducts.getProducts(),
      prod: prod.product,
      fields: {
        willBeUsedIn: {val: ''},
        willBeUsedInLocality: {val: '', validationState: null},
      },
      isSelectedAddress: false,
      optionSelected: true, // true not select location
      noselect: true  // true not select location
    };
    validForm: false
  }

  handlePlanes = (e) => {
    e.preventDefault()
      this.setState({
      optionSelected: true
      });
  };
  handleCambiar = (e) => {
    e.preventDefault()
      this.setState({
      optionSelected: false
      });
  };

  handleChange = (e) => {
    let newFields = Object.assign({}, this.state.fields);
    let isValid = simpleValidation(e.target);
    let newField = Object.assign({}, newFields[e.target.name]);
    newField.val = e.target.value;
    newField.validationState = isValid ? null : 'error';
    newFields[e.target.name] = newField;
    this.setState({
        fields: newFields,
        isSelectedAddress: true,
     });
    
  };   
  componentDidMount() {

    if (this.props.location.params.mode == 'select-location') {
      this.setState({
        optionSelected: false, 
        noselect: false 
      })
      
    }

  }
  render() {
    return (
      <div>
      <Pasos currentStep={1}/>
      <div className={this.state.optionSelected ? 'bg-product' : 'bg-product large' }>
        <Grid>
          <Row>
            <Col sm={12} md={9}>
              <ProductDesc prod={this.state.prod} type="equipo"/>
                <div className={this.state.noselect ? 'cont-options-address hide' : 'cont-options-address' }>
                  <div className={this.state.optionSelected ? 'options hide' : 'options' }>
                    <h4>¿Dónde vas a usar la nueva línea?</h4>
                    <h5>Vas a ver los mejores planes de tu localidad</h5>
                    <FormGroup>
                    <Radio name="willBeUsedIn"
                    value="Capital Federal" onChange={this.handleChange}
                    checked={this.state.fields.willBeUsedIn.val == 'Capital Federal'}
                    >
                    Capital Federal
                    </Radio>
                    <Radio name="willBeUsedIn" value="Gran Buenos Aires" onChange={this.handleChange}
                    checked={this.state.fields.willBeUsedIn.val == 'Gran Buenos Aires'}
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
                    <Button bsStyle="success" disabled={this.state.fields.willBeUsedIn.val =='' || this.state.fields.willBeUsedIn.val =='otra' && this.state.fields.willBeUsedInLocality.val == '' ? 'disabled' : '' } onClick={this.handlePlanes}>Ver planes</Button>
                    <div className="clearfix"></div>
                  </div>

                  <div className={this.state.optionSelected ? 'address' : 'address hide' }>
                  <h4>Estás viendo planes para <span>{this.state.fields.willBeUsedInLocality.val && this.state.fields.willBeUsedIn.val =='otra' ? this.state.fields.willBeUsedInLocality.val : this.state.fields.willBeUsedIn.val}</span></h4>
                  <a href="#" onClick={this.handleCambiar}>Cambiar</a>
                </div>
              </div>
             </Col>
           </Row> 
         </Grid>
        </div>
        <Grid className={this.state.optionSelected ? '' : 'hide' }>
          <Row>
            <Col xs={12}>
              <Tabs planes={this.state.planes}/>
              <TabsMobile planes={this.state.planes} />
              <p className="message">Los precios incluyen IVA consumidor final e impuestos internos; no incluyen impuesto ENARD del 1% ni otros cargos o percepciones.</p>
            </Col>
          </Row>
        </Grid>
      </div>
      );
  }
}
export default FichaPlan;


