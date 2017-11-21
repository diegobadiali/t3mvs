import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const prod = {
	product: {
		name: 'Samsung Galaxy A3',
		price: '$16000',
		imgURL: 'http://t3.cuomatest.com/2017/assets/img/producto.png',
		label1: 'Con mi línea Movistar',
		label2: 'Con línea nueva',
		label3: 'Sin línea - Liberado',
		link1: '/link1',
		link2: '/link2',
		link3: '/link3'
	}
};

function Info(props) {
	return (
		<div className="card-phone">
			<Row>
				<Col xs={3}>
					<Image src={props.prod.imgURL} alt={props.prod.name} />
				</Col>
				<Col xs={9}>
					<h2>{props.prod.name}</h2>
					<span>desde</span>
					<h3>{props.prod.price}</h3>
				</Col>
			</Row>
			<DropdownButton bsStyle="success" id="dropdownPhone" pullRight title="Comprar">
				<MenuItem href={props.prod.link1}><i className="fa fa-angle-right"></i> {props.prod.label1}</MenuItem>
				<MenuItem href={props.prod.link2}><i className="fa fa-angle-right"></i> {props.prod.label2}</MenuItem>
				<MenuItem href={props.prod.link3}><i className="fa fa-angle-right"></i> {props.prod.label3}</MenuItem>
			</DropdownButton>
		</div>
		);
}
function Card(props) {
	return (
		<Info prod={props.product} />
		);
}
class CardPhone extends Component {
	render() {
		return (
			<Card product={prod.product} />
			);
	}
}
export default CardPhone;


