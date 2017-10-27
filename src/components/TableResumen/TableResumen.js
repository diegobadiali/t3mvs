import React from 'react';
import './TableResumen.css';
import { Button, Table, Row, Col } from 'react-bootstrap';
const infotabla = {
  itemList : [{
      id: 1,
      name: 'Samsung Galaxy S8 4G LTE',
      desc: 'Negro - 32GB',
      price: '$22.000,00',
      pricemensual: '-',
      imgURL: 'http://www.movistar.com.ar/documents/10192/14678471/s8.png',
    },
    { 
      id: 2,
      name: 'Plan One',
      desc: '10GB',
      price: '-',
      pricemensual: '$899,00',
      imgURL: 'https://i.imgur.com/tShwylR.png',
    }
  ],
  totals: {
      pricetotal : '$22.000,00',
      pricemensualtotal : '$899,00'  
  }
};

function Tabla(props) {
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
        {props.infotabla.itemList.map((item, i) => {
          return (
            <tr id={i}>
              <td><img className="Foto" src={item.imgURL} alt={item.name} className="img" /></td>
              <td><h2>{item.name} {item.desc}</h2><a href="#">Cambiar <i className="fa fa-angle-right"></i> </a></td>
              <td>{item.price}</td>
              <td>{item.pricemensual}</td>
            </tr>
          );
        })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="2">Total a pagar</td>
            <td>{props.infotabla.totals.pricetotal}</td>
            <td>{props.infotabla.totals.pricemensualtotal}</td>
          </tr>
        </tfoot>
      </Table>
      <Button bsStyle="success">Continuar</Button>
      </div>
   );
}
class TableResumen extends React.Component {
  render() {
    return (
      <Tabla infotabla={infotabla} />
      );
  }
}
export default TableResumen;
