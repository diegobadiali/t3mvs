import React from 'react';
import './TableResumen.css';
import { Button, Table, Row, Col } from 'react-bootstrap';
class TableResumen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return ( 
      <div className="table-resumen">
      <Table>
      <thead>
      <tr>
      <th colSpan="2"></th>
      <th>Ahora</th>
      <th>Mensual</th>
      </tr>
      </thead>
      <tbody>
      {this.props.infotabla.itemList.map((item, i) => {
        return (
          <tr id={i}>
          <td><img className="Foto" src={!item.imgURL ? require('../../assets/img/img-default.png') : item.imgURL} alt={item.name} className="img" /></td>
          <td><h2>{item.name} {item.desc}</h2><a href="#">Cambiar <i className="fa fa-angle-right"></i> </a></td>
          <td>{item.price}</td>
          <td>{item.pricemensual}</td>
          </tr>
          );
      })}
      {this.props.infotabla.onetimecharge ? (
      <tr className="onetimecharge">
      <td colSpan="2"><h2>Cargo de activación</h2></td>
      <td></td>
      <td>{this.props.infotabla.onetimecharge}<small>por única vez</small></td>
      </tr>
      ): ''
      }
      </tbody>
      <tfoot>
      <tr>
      <td colSpan="2">Total a pagar</td>
      <td>{this.props.infotabla.totals.pricetotal}</td>
      <td>{this.props.infotabla.totals.pricemensualtotal}</td>
      </tr>
      </tfoot>
      </Table>
      <Button bsStyle="success">Continuar</Button>
      </div>
      );
  }
}
export default TableResumen;
