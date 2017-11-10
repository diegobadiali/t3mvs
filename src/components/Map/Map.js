import React, {Component} from 'react';
import {Row, Col, FormGroup, FormControl, Button} from 'react-bootstrap';
import GoogleMapReact from 'google-map-react';
import ScrollArea from 'react-scrollbar';
import SucList from './SucList';
import SelectAutocomplete from './SelectAutocomplete';
import './Map.css';

const AnyReactComponent = ({text}) => (
  <div className="marker">
    {text}
  </div>
);

class SimpleMap extends React.Component {
  static defaultProps = {
    center: {lat: -34.63, lng: -58.36},
    zoom: 15
  };

  render() {
    return (
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <AnyReactComponent
          lat={-34.633229}
          lng={-58.361757}
          text={''}
        />
      </GoogleMapReact>
    );
  }
}
class Map extends Component {
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
                  <SelectAutocomplete />
                </div>
              </Col>
              <Col xs={3} sm={3} md={4} lg={3}>
                <Button bsStyle="default" bsSize="large"><span>Usar mi ubicación</span><i className="fa fa-crosshairs"></i></Button>
              </Col>
            </Row>
          </div>
        </Col>
        <Col sm={6}>
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
        </Col>
        <Col sm={6}>
          <div className="cont-map" style={{width: '100%'}}>
            <SimpleMap/>
          </div>
        </Col>
      </Row>
    );
  }
}
export default Map;

