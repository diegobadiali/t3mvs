import React from 'react';
import './Carousel.css';
import Slider from 'react-slick';
import { Button } from 'react-bootstrap';
import ModalPlanes from '../../components/ModalPlanes/ModalPlanes';
const planes = [
  {
  id: 1,
  speed: '10GB',
  name: 'Comunidad 2GB',
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
  name: 'Comunidad 2GB',
  habla: 'Libre a todos los Movistar y 50 min. a otras compañías',
  mensajea: '$Libre a cualquier compañía',
  navega: '2GB incluidos, luego internet x Día Plus (50MBx$7,50)',
  credito: '-',
  extra: '-',
  price: '$2900',
  preciopormes: '$290',
  link: '#',
  recomendado: 'recomendado'
},
{ id: 3,
  speed: '7GB',
  name: 'Comunidad 2GB',
  habla: 'Libre a todos los Movistar y 50 min. a otras compañías',
  mensajea: '$Libre a cualquier compañía',
  navega: '2GB incluidos, luego internet x Día Plus (50MBx$7,50)',
  credito: '-',
  extra: '-',
  price: '$2900',
  preciopormes: '$290',
  link: '#',
  recomendado: ''
},
{ id: 4,
  speed: '7GB',
  name: 'Comunidad 2GB',
  habla: 'Libre a todos los Movistar y 50 min. a otras compañías',
  mensajea: '$Libre a cualquier compañía',
  navega: '2GB incluidos, luego internet x Día Plus (50MBx$7,50)',
  credito: '-',
  extra: '-',
  price: '$2900',
  preciopormes: '$290',
  link: '#',
  recomendado: ''
},
{ id: 5,
  speed: '7GB',
  name: 'Comunidad 2GB',
  habla: 'Libre a todos los Movistar y 50 min. a otras compañías',
  mensajea: '$Libre a cualquier compañía',
  navega: '2GB incluidos, luego internet x Día Plus (50MBx$7,50)',
  credito: '-',
  extra: '-',
  price: '$2900',
  preciopormes: '$290',
  link: '#',
  recomendado: ''
},
{ id: 6,
  speed: '7GB',
  name: 'Comunidad 2GB',
  habla: 'Libre a todos los Movistar y 50 min. a otras compañías',
  mensajea: '$Libre a cualquier compañía',
  navega: '2GB incluidos, luego internet x Día Plus (50MBx$7,50)',
  credito: '-',
  extra: '-',
  price: '$2900',
  preciopormes: '$290',
  link: '#',
  recomendado: ''
}
];
function Plan(props) {
  const content = props.planes.map((plan) =>
    <div className="cont-plan" key={plan.id}>
      <div className={"plan " +plan.recomendado}>
        <div className="head-plan">
          <span>RECOMENDADO</span>
          <h4>{plan.speed}</h4>
          <h5>{plan.name}</h5>
        </div>
        <ul>
          <li><strong>Hablá</strong>
          {plan.habla}</li>
          <li><strong>Mensajeá</strong>
          {plan.mensajea}</li>
          <li><strong>Navegá</strong>
          {plan.navega}</li>
          <li><strong>Beneficios extra</strong>
          {plan.extra}</li>
        </ul>
        <span className="text-center">Precio del plan</span>
        <span className="price">{plan.preciopormes}<sub>/mes</sub></span>
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
  render() {
    return (
      <Plan planes={planes} />
      );
  }
}
export default Carousel;



