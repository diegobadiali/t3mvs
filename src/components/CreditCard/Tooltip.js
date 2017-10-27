import React, {Component} from 'react';
import {Popover, Button, OverlayTrigger} from 'react-bootstrap';
import img from '../../assets/img/tooltip-tarjeta.png';
import './Tooltip.css';
const popover = (
  <Popover title="" id="popover">
    <img src={img} alt="Código de seguridad. Para American Express Últimos 4 dígitos que figuran en el frente. Para las demás tarjetas Últimos 3 dígitos que figuran en el dorso."/>
  </Popover>
);
class Tooltip extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <OverlayTrigger trigger={['hover', 'focus']} placement={this.props.position} overlay={popover}>
        <Button className="btn-tooltip"><i className="fa fa-question-circle"></i> </Button>
      </OverlayTrigger>
    );
  }
}
export default Tooltip;