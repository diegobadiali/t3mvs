import React, {Component} from 'react';
import {Row, Col, FormGroup, FormControl, Button} from 'react-bootstrap';
import ScrollArea from 'react-scrollbar';
import SucList from './SucList';
import SelectAutocomplete from './SelectAutocomplete';

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      fakeError: false,
      disabled: true
    }
  }

  parentMethod(){
    this.setState({
      visible: true
    })
  }

  handleSucursalParent = () => {
    this.props.handleSucursal();
  }

  handleChange(selectedOption){
    this.setState({
      visible: true,
      fakeError: false
    });

    switch (selectedOption) {
      case 'Córdoba':
        this.setState({ fakeError: true });
        break;
        }
  }

  handleSucursalParent = () => {
    this.props.handleSucursal();
  }

  handleSelectSucursal = () => {
    this.setState({
      disabled: false
    })
  }

  render() {
    return (
      <Row>
        <Col sm={12}>
            <div className="cont-search">
              
              <Row>
                <Col sm={12}>
                  <div>
                    <SelectAutocomplete parentMethod={this.handleChange.bind(this)}/>
                  </div>
                </Col>
                
              </Row>
            </div>
          </Col>
          <Col sm={12} className={this.state.visible ? 'cont-result visible' : 'hidden'}>

          {this.state.fakeError ? ( 
            <div className="no-disponible">
                <div className="alert alert-info-plan"><p><i className="fa fa-info-circle"></i> El equipo seleccionado no está disponible para retiro en ningun local de la provincia seleccionada</p></div>
            </div>    
            ):(
              <div>
                <h3>El <strong>{this.props.device}</strong> está disponible en los siguientes locales Movistar:</h3>
                <p><a href="http://ayuda.movistar.com.ar/locales-movistar/" target="_blank">Ver horario de Locales Comerciales</a></p>
                <ScrollArea
                speed={0.8}
                className="cont-sucursales"
                contentClassName="content"
                horizontal={false}
                smoothScrolling={true}
                >
                <div>
                  <SucList handleSelectSucursal={this.handleSelectSucursal}/>
                </div>
              </ScrollArea>
              <div className="clearfix"></div>
              <div className="cont-btns">
                <Button bsStyle="success" onClick={this.handleSucursalParent} disabled={this.state.disabled}>
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

