import React from 'react';
import Slider from 'react-slick';
import { Button } from 'react-bootstrap';
import ModalPlanes from '../../components/ModalPlanes/ModalPlanes';
import Item from './Item';

function Plan(props) {
  var content = "";
    switch (props.tab) {
      case 'facturalibre':
        content = props.planes.facturalibre.map((plan) =>
          <div className="cont-plan" key={plan.id}>
            <div className={plan.recomendado ? 'plan recomendado' : 'plan'}>
            <div className="head-plan">
              <span>RECOMENDADO</span>
              <h4>{plan.planprice}<sub>/mes</sub></h4>
              <h5>{plan.name}</h5>
            </div>
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
            </ul>
            <div className="foot-plan"> 
            <span className="text-center">Precio del equipo</span>
            <span className="price-cel">{plan.price}</span>
            <Button href={plan.link}>
            Quiero este plan
            </Button>
            <ModalPlanes />
            </div>
          </div>
        </div>
        );
        break;
      case 'facturafija':
        content = props.planes.facturafija.map((plan) =>
        <div className="cont-plan" key={plan.id}>
          <div className={plan.recomendado ? 'plan recomendado' : 'plan'}>
            <div className="head-plan">
              <span>RECOMENDADO</span>
              <h4>{plan.planprice}<sub>/mes</sub></h4>
              <h5>{plan.name}</h5>
            </div>
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
            </ul>
            <div className="foot-plan"> 
            <span className="text-center">Precio del equipo</span>
            <span className="price-cel">{plan.price}</span>
            <Button href={plan.link}>
            Quiero este plan
            </Button>
            <ModalPlanes />
            </div>
          </div>
        </div>
        );
        break;
      case 'sinfactura':
        content = props.planes.sinfactura.map((plan) =>
        <div className="cont-plan" key={plan.id}>
        <div className={plan.recomendado ? 'plan recomendado' : 'plan'}>
          <div className="head-plan head-plan-prepago">
            <span>RECOMENDADO</span>
            <h4></h4>
            <h5>{plan.planprice}</h5>
          </div>
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
        </ul>
        <div className="foot-plan"> 
        <span className="text-center">Precio del equipo</span>
        <span className="price-cel">{plan.price}</span>
        <Button href={plan.link}>
        Quiero este plan
        </Button>
        <ModalPlanes />
        </div>
      </div>
    </div>
    );
    break;
    case 'internetmovil':
      content = props.planes.internetmovil.map((plan) =>
      <div className="cont-plan" key={plan.id}>
        <div className={plan.recomendado ? 'plan recomendado' : 'plan'}>
        <div className="head-plan">
          <span>RECOMENDADO</span>
          <h4>{plan.planprice}<sub>/mes</sub></h4>
          <h5>{plan.name}</h5>
        </div>
        <ul>
          <li><strong>Navegá</strong>
          {plan.navega}</li>
          <li><strong>Recomendados para</strong>
          {plan.recomendados}</li>
          <li><strong>Aptos para</strong>
          {plan.aptos}</li>
        </ul>
        <div className="foot-plan"> 
        <span className="text-center">Precio del equipo</span>
        <span className="price-cel">{plan.price}</span>
        <Button href={plan.link}>
        Quiero este plan
        </Button>
        <ModalPlanes />
        </div>
      </div>
    </div>
    );
    break;
    }

  var settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    swipe: true,
    responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }   
    }
    ]
  }
  return (
   <Slider {...settings}>
   {content}
   </Slider>
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

