import React from 'react';
import './TabsMobile.css';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Tab } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';
import AccordionPlanMobile from '../../components/AccordionPlanMobile/AccordionPlanMobile';
class TabsMobile extends React.Component {
  constructor(props) {
    super(props);
      this.state = {title: 'Con factura libre'};
    }
    handleClick(e){
    this.setState({title: e});
  }
 render() {
  return (
    <Tab.Container id="tabsPlanesMobile" defaultActiveKey="Con factura libre">
      <Row className="clearfix">
        <Col xs={12}>
        <p><strong>Planes</strong></p>
        <Nav bsStyle="pills">
          <NavDropdown id="tabsDropDownMobile" title={this.state.title} onSelect={this.handleClick.bind(this)}>
            <MenuItem eventKey="Con factura libre">Con factura libre</MenuItem>
            <MenuItem eventKey="Con factura fija">Con factura fija</MenuItem>
            <MenuItem eventKey="Sin factura">Sin factura</MenuItem>
          </NavDropdown>
        </Nav>
        </Col>
        <Col xs={12}>
          <Tab.Content animation>
            <Tab.Pane eventKey="Con factura libre">
              <h4>Con factura libre</h4>
              <p>Planes que te permiten estar comunicado siempre.</p>
              <AccordionPlanMobile />
            </Tab.Pane>
            <Tab.Pane eventKey="Con factura fija">
              <h4>Con factura fija</h4>
              <p>Planes que te permiten comunicarte controlando tu gasto.</p>
              <AccordionPlanMobile />
            </Tab.Pane>
            <Tab.Pane eventKey="Sin factura">
              <h4>Sin factura</h4>
              <p>Recargás y disfrutás de las mejores promociones.</p>
              <AccordionPlanMobile />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
   );
  }
}
export default TabsMobile;
