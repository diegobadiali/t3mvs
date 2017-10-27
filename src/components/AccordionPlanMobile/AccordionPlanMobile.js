import React from 'react';
import './AccordionPlanMobile.css';
import { Button } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import {    AccordionWithHeader, AccordionNode, AccordionHeader, AccordionPanel} from 'react-accordion-with-header';
import ModalPlanes from '../../components/ModalPlanes/ModalPlanes';
const planes = [
  {
  id: 1,
  speed: '10GB',
  name: 'Comunidad 10GB',
  habla: 'Libre a todos los Movistar y 50 min. a otras compañías',
  mensajea: '$Libre a cualquier compañía',
  navega: '2GB incluidos, luego internet x Día Plus (50MBx$7,50) Loren ipsum dolor sit amet',
  credito: '-',
  extra: '-',
  price: '$2900',
  preciopormes: '$290',
  link: '#',
  recomendado: ''
},
{ id: 2,
  speed: '7GB',
  name: 'Comunidad 7GB',
  habla: 'Libre a todos los Movistar y 50 min. a otras compañías',
  mensajea: '$Libre a cualquier compañía',
  navega: '2GB incluidos, luego internet x Día Plus (50MBx$7,50)',
  credito: '-',
  extra: '-',
  price: '$2900',
  preciopormes: '$290',
  link: '#',
  recomendado: 'recomendado'
}
];
function Plan(props) {
  return (
    <AccordionWithHeader className="accordionPlanMobile">
        {props.planes.map((plan, i) => {
          return (
            <AccordionNode key={i}>
              <AccordionHeader horizontalAlignment="centerSpaceBetween" verticalAlignment="top" className={"head-plan " +plan.recomendado}>
                  <div><h4>{plan.speed}</h4>
                  <h5>{plan.name}</h5>
                  <span className="label-recomendado">Recomendado</span>
                  </div>
                  <div><span className="text">Precio del plan</span>
                  <span className="price">{plan.preciopormes}<sub>/mes</sub></span>
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
                      <li><strong>Beneficios extra</strong>
                      {plan.extra}</li>
                      <li><span className="text">Precio del equipo</span><span className="price">{plan.preciopormes}<sub>/mes</sub></span></li>
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
        })}
      </AccordionWithHeader>
   );
}
class Carousel extends React.Component {
  render() {
    return (
      <Plan planes={planes} />
      );
  }
}
export default Carousel;


    
    



