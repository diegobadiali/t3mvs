import React, { Component } from 'react';
import './ElegiPlanLineaNueva.css';
import { Grid, Row, Col } from 'react-bootstrap';
import Pasos from '../../components/Pasos/Pasos';
import LineDesc from '../../components/ProductDesc/LineDesc';
import Tabs from '../../components/Tabs/Tabs';
import TabsMobile from '../../components/TabsMobile/TabsMobile';

class FichaPlan extends Component {  
  render() {
    return (
      <div>
      <Pasos currentStep={1}/>
      <div className="bg-product">
        <Grid>
          <Row>
            <Col sm={12} md={9}>
              <LineDesc />
             </Col>
           </Row> 
         </Grid>
        </div>
        <Grid>
          <Row>
            <Col xs={12}>
              <Tabs />
              <TabsMobile />
              <p className="message">Los precios incluyen IVA consumidor final e impuestos internos; no incluyen impuesto ENARD del 1% ni otros cargos o percepciones.</p>
            </Col>
          </Row>
        </Grid>
      </div>
      );
  }
}
export default FichaPlan;


