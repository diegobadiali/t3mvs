import React from 'react';
import './AccordionPlanMobile.css';
import { Button } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import {    AccordionWithHeader, AccordionNode, AccordionHeader, AccordionPanel} from 'react-accordion-with-header';
import ModalPlanes from '../../components/ModalPlanes/ModalPlanes';

function Plan(props) {

    var content = "";
    switch (props.tab) {
      case 'facturalibre':
       content = props.planes.facturalibre.map((plan, i) => 
            <AccordionNode key={i}>
              <AccordionHeader horizontalAlignment="centerSpaceBetween" verticalAlignment="top" className={plan.recomendado ? 'head-plan recomendado' : 'head-plan'}>
                  <div><h4>{plan.planprice}<sub>/mes</sub></h4>
                  <h5>{plan.name}</h5>
                  <span className="label-recomendado">Recomendado</span>
                  </div>
                  <div>
                  <span className="text">Precio del equipo</span>
                  <span className="price-cel">{plan.price}</span>
                  <i className="fa fa-angle-down"></i>
                  <i className="fa fa-angle-up"></i>
                  </div>
              </AccordionHeader>
              <AccordionPanel>
                <div className="cont-plan">
                  <div className="plan">
                    <ul>
                      <li><strong>Hablá</strong>
                      {plan.habla}</li>
                      <li><strong>Mensajeá</strong>
                      {plan.mensajea}</li>
                      <li><strong>Navegá</strong>
                      {plan.navega}</li>
                      <li><strong>Beneficios</strong>
                      {plan.beneficios}</li>
                      <li><strong>Beneficios extra</strong>
                      {plan.extra}</li>
                      <li><span className="text">Precio del equipo</span>
                      <span className="price-cel">{plan.price}</span>         
                    <Button href={plan.link}>
                    Quiero este plan
                    </Button>
                    <ModalPlanes />
                    </li>
                    </ul>
                  </div>
                </div>
              </AccordionPanel>
            </AccordionNode>
            );
          break;
      case 'facturafija':
        content = props.planes.facturafija.map((plan, i) => 
            <AccordionNode key={i}>
              <AccordionHeader horizontalAlignment="centerSpaceBetween" verticalAlignment="top" className={plan.recomendado ? 'head-plan recomendado' : 'head-plan'}>
                  <div><h4>{plan.planprice}<sub>/mes</sub></h4>
                  <h5>{plan.name}</h5>
                  <span className="label-recomendado">Recomendado</span>
                  </div>
                  <div>
                  <span className="text">Precio del equipo</span>
                  <span className="price-cel">{plan.price}</span>
                  <i className="fa fa-angle-down"></i>
                  <i className="fa fa-angle-up"></i>
                  </div>
              </AccordionHeader>
              <AccordionPanel>
                <div className="cont-plan">
                  <div className="plan">
                    <ul>
                      <li><strong>Hablá</strong>
                      {plan.habla}</li>
                      <li><strong>Mensajeá</strong>
                      {plan.mensajea}</li>
                      <li><strong>Navegá</strong>
                      {plan.navega}</li>
                      <li><strong>Beneficios</strong>
                      {plan.beneficios}</li>
                      <li><strong>Beneficios extra</strong>
                      {plan.extra}</li>
                      <li><span className="text">Precio del equipo</span>
                      <span className="price-cel">{plan.price}</span>         
                    <Button href={plan.link}>
                    Quiero este plan
                    </Button>
                    <ModalPlanes />
                    </li>
                    </ul>
                  </div>
                </div>
              </AccordionPanel>
            </AccordionNode>
            );
      break;
      case 'sinfactura':
        content = props.planes.sinfactura.map((plan, i) => 
            <AccordionNode key={i}>
              <AccordionHeader horizontalAlignment="centerSpaceBetween" verticalAlignment="top" className={plan.recomendado ? 'head-plan recomendado' : 'head-plan'}>
                  <div><h4>{plan.planprice}<sub>/mes</sub></h4>
                  <h5>{plan.name}</h5>
                  <span className="label-recomendado">Recomendado</span>
                  </div>
                  <div>
                  <span className="text">Precio del equipo</span>
                  <span className="price-cel">{plan.price}</span>
                  <i className="fa fa-angle-down"></i>
                  <i className="fa fa-angle-up"></i>
                  </div>
              </AccordionHeader>
              <AccordionPanel>
                <div className="cont-plan">
                  <div className="plan">
                    <ul>
                      <li><strong>Hablá</strong>
                      {plan.habla}</li>
                      <li><strong>Mensajeá</strong>
                      {plan.mensajea}</li>
                      <li><strong>Navegá</strong>
                      {plan.navega}</li>
                      <li><strong>Beneficios</strong>
                      {plan.beneficios}</li>
                      <li><strong>Beneficios extra</strong>
                      {plan.extra}</li>
                      <li><span className="text">Precio del equipo</span>
                      <span className="price-cel">{plan.price}</span>         
                    <Button href={plan.link}>
                    Quiero este plan
                    </Button>
                    <ModalPlanes />
                    </li>
                    </ul>
                  </div>
                </div>
              </AccordionPanel>
            </AccordionNode>
            );
      break;
      case 'internetmovil':
        content = props.planes.internetmovil.map((plan, i) => 
            <AccordionNode key={i}>
              <AccordionHeader horizontalAlignment="centerSpaceBetween" verticalAlignment="top" className={plan.recomendado ? 'head-plan recomendado' : 'head-plan'}>
                  <div><h4>{plan.planprice}<sub>/mes</sub></h4>
                  <h5>{plan.name}</h5>
                  <span className="label-recomendado">Recomendado</span>
                  </div>
                  <div>
                  <span className="text">Precio del equipo</span>
                  <span className="price-cel">{plan.price}</span>
                  <i className="fa fa-angle-down"></i>
                  <i className="fa fa-angle-up"></i>
                  </div>
              </AccordionHeader>
              <AccordionPanel>
                <div className="cont-plan">
                  <div className="plan">
                    <ul>
                      <li><strong>Hablá</strong>
                      {plan.habla}</li>
                      <li><strong>Mensajeá</strong>
                      {plan.mensajea}</li>
                      <li><strong>Navegá</strong>
                      {plan.navega}</li>
                      <li><strong>Beneficios</strong>
                      {plan.beneficios}</li>
                      <li><strong>Beneficios extra</strong>
                      {plan.extra}</li>
                      <li><span className="text">Precio del equipo</span>
                      <span className="price-cel">{plan.price}</span>         
                    <Button href={plan.link}>
                    Quiero este plan
                    </Button>
                    <ModalPlanes />
                    </li>
                    </ul>
                  </div>
                </div>
              </AccordionPanel>
            </AccordionNode>
            );
      break;
        }
        return(
          <AccordionWithHeader className="accordionPlanMobile">
          {content}
          </AccordionWithHeader>
      );
      
}
class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <Plan tab={this.props.tab} planes={this.props.planes.data} />
      );
  }
}
export default Carousel;


    
    



