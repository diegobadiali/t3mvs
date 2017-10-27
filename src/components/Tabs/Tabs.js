import React from 'react';
import './Tabs.css';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Tab } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import Carousel from '../../components/Carousel/Carousel';

class Tabs extends React.Component {
 render() {
  return (
   <Tab.Container id="tabsPlanes" defaultActiveKey="Con factura libre">
    <Row className="clearfix">
      <Col xs={12}>
        <Nav className="nav-tabs">
          <NavItem eventKey="Con factura libre">
            <h4>Con factura libre</h4>
            <p>Planes que te permiten estar comunicado siempre.</p>
          </NavItem>
          <NavItem eventKey="Con factura fija">
            <h4>Con factura fija</h4>
            <p>Planes que te permiten comunicarte controlando tu gasto.</p>
          </NavItem>
          <NavItem eventKey="Sin factura">
            <h4>Sin factura</h4>
            <p>Recargás y disfrutás de las mejores promociones.</p>
          </NavItem>
          <NavItem eventKey="Internet Móvil">
            <h4>Internet Móvil</h4>
            <p>Para navegar en otros dispositivos. Tablets y módems.</p>
          </NavItem>
        </Nav>
      </Col>
      <Col xs={12}>
        <Tab.Content animation>
          <Tab.Pane eventKey="Con factura libre">
            <Carousel />
          </Tab.Pane>
          <Tab.Pane eventKey="Con factura fija">
            <Carousel />
          </Tab.Pane>
          <Tab.Pane eventKey="Sin factura">
            <Carousel />
          </Tab.Pane>
          <Tab.Pane eventKey="Internet Móvil">
            <Carousel />
          </Tab.Pane>
        </Tab.Content>
      </Col>
    </Row>
  </Tab.Container>
   );
}
}
export default Tabs;
