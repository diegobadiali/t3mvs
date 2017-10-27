import React, {Component} from 'react';
import {FormGroup, Row, Col } from 'react-bootstrap';
import './SucList.css';
const list = [
  {id: 1, sucursal: 'Almagro', direccion: 'Av. Corrientes 2973', horario: 'Lunes a viernes de 9 a 19hs'},
  {id: 2, sucursal: 'Almagro', direccion: 'Av. Corrientes 2973', horario: 'Lunes a viernes de 9 a 19hs'},
  {id: 3, sucursal: 'Almagro', direccion: 'Av. Corrientes 2973', horario: 'Lunes a viernes de 9 a 19hs'},
  {id: 4, sucursal: 'Almagro', direccion: 'Av. Corrientes 2973', horario: 'Lunes a viernes de 9 a 19hs'},
  {id: 5, sucursal: 'Almagro', direccion: 'Av. Corrientes 2973', horario: 'Lunes a viernes de 9 a 19hs'},
  {id: 6, sucursal: 'Almagro', direccion: 'Av. Corrientes 2973', horario: 'Lunes a viernes de 9 a 19hs'},
  {id: 7, sucursal: 'Almagro', direccion: 'Av. Corrientes 2973', horario: 'Lunes a viernes de 9 a 19hs'}
];
function Sucursales(props) {

  const sucursales = (
  	<FormGroup>
    <ul>
      {props.list.map((post) =>
        <li key={post.id} className={props.activeItem == post.id?'active':''}>
          <label for={post.id}>
	        	<Row>
	        		<Col xs={2}>
	        			<input type="radio" name="radioGroup" id={post.id} value={post.id} onClick={props.handleChange}/>
	        		</Col>
					    <Col xs={10}>
			          <h4>{post.sucursal}</h4>
			          <h5>{post.direccion}</h5>
			          <h6>{post.horario}</h6>
		          </Col>
	        	</Row>
            </label>	
        </li>
      )}
    </ul>
    </FormGroup>
  );
  return (
    <div>
      {sucursales}
    </div>
  );
}
class SucList extends Component {

  constructor(){
    super();
    this.state = {
      activeSucursal: null,
    };
  }

  handleChange = (e) => {
    this.setState({
      activeSucursal: e.target.value,
    });
  };

  render() {
    return (
      <Sucursales list={list} activeItem={this.state.activeSucursal} handleChange={this.handleChange}/>
      );
  }
}
export default SucList;

