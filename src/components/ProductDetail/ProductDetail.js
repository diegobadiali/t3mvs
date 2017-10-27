import React, { Component } from 'react';
import './ProductDetail.css';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
const prod = {
  	product: {
  		name: 'Samsung Galaxy A3 4G LTE',
  		desc: 'Con un chasis totalmente de metal, el Galaxy A cuenta entre sus características una pantalla Super AMOLED qHD de 4.5 pulgadas, procesador quad-core a 1.2GHz, 1GB de RAM, 16GB de almacenamiento, ranura microSD, cámara principal de 8MP y frontal de 5MP y corre Android 4.4 KitKat. Con un chasis totalmente de metal, el Galaxy A cuenta entre sus características una pantalla Super AMOLED qHD de 4.5 pulgadas, procesador quad-core a 1.2GHz, 1GB de RAM, 16GB de almacenamiento, ranura microSD, cámara principal de 8MP y frontal de 5MP y corre Android 4.4 KitKat',
  		price: '$5666',
  		plan: 'Con tu plan actual',
  		link: '/',
  		linkcatalogo: '/',
  		imgURL: 'http://t3.cuomatest.com/2017/assets/img/producto.png',
  	}
  };
  function Foto(props) {
  	return (
  		<img className="Foto"
  		src={props.prod.imgURL}
  		alt={props.prod.name} className="img" />
  		);
  }
  function Title(props) {
  	return (
  		<div>
	  		<h1>
	  		{props.prod.name}
	  		</h1>
	  		<h2>
	  		{props.prod.desc}
	  		</h2>
	  		<h3>{props.prod.price}</h3>	
			  <h4>{props.prod.plan}</h4>
			  <Button href={props.prod.link} className="btn btn-success"><span>Comprar con mi plan actual</span><i className="icon-tienda"></i></Button>
  		</div>
  	);
  }
  function Foot(props) {
  	return (
  		<div className="foot">
				<Row>
					<Col xs={6} sm={4}>
						<a href={props.prod.link}>Más info del equipo <i className="fa fa-angle-right"></i></a>
					</Col>
					<Col xs={6} sm={8}>
						<a href={props.prod.linkcatalogo} className="nbr">Volver al catálogo <i className="fa fa-angle-right"></i></a>
					</Col>
				</Row>
			</div>
  	 	);
  }	
  function Producto(props) {
  	return (
  		<div className="product-detail">
  			<Row>
				<Col xs={4}>
					<Foto prod={props.product} />
				</Col>
				<Col xs={8}>
	  				<Title prod={props.product} />
	  			</Col>	
			</Row>
			<Foot prod={props.product} />
		</div>
  		);
  }
  class ProductDetail extends React.Component {
  	render() {
  		return (
			<Producto product={prod.product} />
		);
  	}
  }
export default ProductDetail;
