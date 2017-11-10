import React from 'react';
import { Button } from 'react-bootstrap';
import ModalPlanes from '../../components/ModalPlanes/ModalPlanes';
class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className="cont-plan" key={this.props.id}>
      <div className={"plan " +this.props.recomendado}>
        <div className="head-plan">
          <span>RECOMENDADO</span>
          <h4>{this.props.speed}</h4>
          <h5>{this.props.name}</h5>
        </div>
        <ul>
          <li><strong>Hablá</strong>
          {this.props.habla}</li>
          <li><strong>Mensajeá</strong>
          {this.props.mensajea}</li>
          <li><strong>Navegá</strong>
          {this.props.navega}</li>
          <li><strong>Beneficios extra</strong>
          {this.props.extra}</li>
        </ul>
        <span className="text-center">Precio del plan</span>
        <span className="price">{this.props.preciopormes}<sub>/mes</sub></span>
        <div className="foot-plan"> 
        <span className="text-center">Precio del equipo</span>
        <span className="price-cel">{this.props.price}</span>
        <Button href={this.props.link}>
        Quiero este plan
        </Button>
        <ModalPlanes />
        </div>
      </div>
    </div>
      );
  }
}
export default Item;

