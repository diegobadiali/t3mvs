import React, { Component } from 'react';
import { Grid, Row, Col, FormControl, FormGroup, Radio, Button } from 'react-bootstrap';
import Pasos from '../../components/Pasos/Pasos';
import ProductDesc from '../../components/ProductDesc/ProductDesc';
import Message from '../../components/Message/Message';
const prod = {
    product: {
      name: 'Samsung Galaxy S8 4G LTE Negro - 32GB',
      price: '$22.000,00',
      plan: 'Con planes desde $800',
      imgURL: 'http://www.movistar.com.ar/documents/10192/14678471/s8.png',
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
              <ProductDesc prod={this.state.prod} type="equipo"/>
              <Message text={["No encontramos planes para ofrecerte. ",<a href="#">Comprar el equipo sin plan.</a>]} class={"info-plan"}/>
              <div className="cont-btn"><Button bsStyle="success">Comprar el equipo sin plan</Button></div>
             </Col>
           </Row> 
         </Grid>
        </div>
      </div>
      );
  }
}
export default FichaPlan;


