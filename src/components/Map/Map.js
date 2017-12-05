import React, {Component} from 'react';
import {Row, Col, FormGroup, FormControl, Button} from 'react-bootstrap';
import ScrollArea from 'react-scrollbar';
import SucList from './SucList';

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      fakeError: false
    }
  }

  handleChange(e){
    this.setState({
      visible: true,
      fakeError: false
    });
    switch (this.inputEl.value) {
      case 'Córdoba':
        this.setState({ fakeError: true });
        break;
        }
  }

  handleSucursalParent = () => {
    this.props.handleSucursal();
  }

  render() {
    return (
      <Row>
        <Col sm={12}>
            <div className="cont-search">
              
              <Row>
                <Col sm={12}>
                  <div>
                    <FormGroup className={this.state.visible ? 'active' : '' }>
                      <FormControl
                        componentClass="select"
                        className="select-prov"
                        placeholder="Seleccioná tu provincia"
                        name="provincia"
                        onChange={this.handleChange.bind(this)}
                        inputRef={ el => this.inputEl=el }
                      >
                        <option value="" disabled selected>Seleccioná tu provincia</option>
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
                  </div>
                </Col>
                
              </Row>
            </div>
          </Col>
          <Col sm={12} className={this.state.visible ? 'cont-result visible' : 'hidden'}>

          {this.state.fakeError ? ( 
            <div className="no-disponible">
                <h3><strong>El Samsung Galaxy S8 Negro 32GB</strong> no esta disponible para retiro en ningun local de la provincia seleccionada</h3>
            </div>    
            ):(
              <div>
                <h3><strong>El Samsung Galaxy S8 Negro 32GB</strong> esta disponible en los siguientes locales Movistar:</h3>
                <ScrollArea
                speed={0.8}
                className="cont-sucursales"
                contentClassName="content"
                horizontal={false}
                smoothScrolling={true}
                >
                <div>
                  <SucList />
                </div>
              </ScrollArea>
              <div className="clearfix"></div>
              <div className="cont-btns">
                <Button bsStyle="success" onClick={this.handleSucursalParent}>
                  Continuar
                </Button>
              </div>
            </div>
            )
          }

          
        </Col>

      </Row>
      );
  }
}
export default Map;

