import React, {Component} from 'react';
import './Home.css';
import {Grid} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {PageHeader} from 'react-bootstrap';
import CardLine from '../../components/CardLine/CardLine';
import CardPhone from '../../components/CardPhone/CardPhone';
import TooltipTarjeta from '../../components/CreditCard/Tooltip';
const username = {
  user: {
    name: "pepe"
  }
};
function Info(props) {
  return (
    <PageHeader>Bienvenido {props.username.name}</PageHeader>
  );
}
function User(props) {
  return (
    <Info username={props.user}/>
  );
}
class Home extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <User user={username.user}/>
            <Row className="show-grid">
              <Col xs={12} sm={6} md={4}>
                <CardLine />
              </Col>
              <Col xs={12} sm={6} md={4}>
                <CardPhone />
              </Col>
            </Row>
          </Col>
        </Row>
        <TooltipTarjeta position={"top"}/>
      </Grid>
    );
  }
}
export default Home;