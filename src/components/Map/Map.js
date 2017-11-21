import React, {Component} from 'react';
import {Row, Col, FormGroup, FormControl, Button} from 'react-bootstrap';
import ScrollArea from 'react-scrollbar';
import SucList from './SucList';
import SelectAutocomplete from './SelectAutocomplete';

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
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

  render() {
    return (
      <Row>
        <Col sm={12}>
            <div className="cont-search">
              <h3><strong>El Samsung Galaxy S8 Negro 32GB</strong> esta disponible en los siguientes locales Movistar:
              </h3>
              <Row>
                <Col xs={9} sm={9} md={8} lg={9}>
                  <div>
                    <SelectAutocomplete parentMethod={this.parentMethod.bind(this)}/>
                  </div>
                </Col>
                <Col xs={3} sm={3} md={4} lg={3}>
                  <Button bsStyle="default" bsSize="large"><span>Usar mi ubicación</span><i className="fa fa-crosshairs"></i></Button>
                </Col>
              </Row>
            </div>
          </Col>
          <Col sm={12} className={this.state.visible ? 'visible' : 'hidden'}>
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
        </Col>

      </Row>
      );
  }
}
export default Map;

