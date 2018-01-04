import React, { Component } from 'react';
import { Grid, Row, Col, FormControl, FormGroup, Radio, Button } from 'react-bootstrap';
import Pasos from '../../components/Pasos/Pasos';
import ProductDesc from '../../components/ProductDesc/ProductDesc';
import Message from '../../components/Message/Message';
const prod = {
    product: {
      name: 'Línea Movistar',
      desc: '4g nano SIM',
      price: '$0,00',
      imgURL: require('../../assets/img/img-chip2.png'),
    }
  };
class FichaPlan extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      prod: prod.product
    };
  }
  render() {
    return (
      <div>
      <Pasos currentStep={1}/>
      <div className={this.state.optionSelected ? 'bg-product' : 'bg-product large' }>
        <Grid>
          <Row>
            <Col sm={12} md={9}>
              <ProductDesc prod={this.state.prod} type="línea"/>
              <Message text={["No encontramos planes para ofrecerte. Llamá sin cargo al ",<a href="tel:08002226116">0800 222 6116</a>, " para continuar con tu compra."]} class={"info-plan"}/>
              
             </Col>
           </Row> 
         </Grid>
        </div>
      </div>
      );
  }
}
export default FichaPlan;


