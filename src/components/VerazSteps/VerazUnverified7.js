import React, {Component} from 'react';
import { Button, Table, Radio } from 'react-bootstrap';
class VerazUnverified7 extends Component {
  render() {
    return (
      <div className="cont-preguntas msg-error">
        <h2 className="text-center">Encontramos más de una dirección posible<br />para los datos ingresados.</h2>
        <p><strong>Seleccioná la dirección correcta:</strong></p>
        <div className="table-resumen table-list">
          <Table>
            <thead>
              <tr>
                <th>Calle</th>
                <th>Número</th>
                <th>Localidad</th>
                <th>Provincia</th>
                <th>Código postal</th>
              </tr>
            </thead>
            <tbody>
             {this.props.infotabla.itemList.map((item, i) => {
              return(
              <tr>
                <td><div className="form-group"><Radio name="radioLocations" title={item.street} id={i} inline><p>{item.street}</p></Radio></div></td>
                <td><p>{item.number}</p></td>
                <td><p>{item.locality}</p></td>
                <td><p>{item.city}</p></td>
                <td><p>{item.zipcode}</p></td>
              </tr>
              );
              })}
            </tbody>
          </Table>
          <Button bsStyle="success">Seleccionar</Button>
        </div>    
      </div>
    );
  }
}
export default VerazUnverified7;