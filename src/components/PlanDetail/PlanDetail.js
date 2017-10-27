import React, { Component } from 'react';
import './PlanDetail.css';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
const prod = {
 product: {
  category: 'comunidad',
  name: 'Comunidad 2GB',
  habla: 'Libre a todos los Movistar y 50 min. a otras compañías',
  mensajea: '$Libre a cualquier compañía',
  navega: '2GB incluidos, luego internet x Día Plus (50MBx$7,50)',
  credito: '-',
  price: '$290'
}
};
function Info(props) {
 return (
  <div className="plan-detail">
  <div className="head">
  <h5><i className="fa fa-angle-down"></i><i className="fa fa-angle-up"></i>Este es tu plan actual:</h5>
  <span className={'name name-' +props.prod.category}> {props.prod.name}</span>
  </div>
  <div className="cont">
  <ul>
  <li><strong>Hablá</strong>
  {props.prod.habla}</li>
  <li><strong>Mensajeá</strong>
  {props.prod.mensajea}</li>
  <li><strong>Navegá</strong>
  {props.prod.navega}</li>
  <li><strong>crédito</strong>
  {props.prod.credito}</li>
  </ul>
  <span className="price">{props.prod.price}<sub>/mes</sub></span>
  <span>Precio del plan</span>
  </div>
  </div>
  );
}
function Plan(props) {
 return (
   <Info prod={props.product} />
   );
}
class PlanDetail extends React.Component {
 render() {
  return (
   <Plan product={prod.product} />
   );
}
}
export default PlanDetail;
