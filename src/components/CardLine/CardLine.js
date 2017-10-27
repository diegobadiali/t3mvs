import React, { Component } from 'react';
import './CardLine.css';
import { Button } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
const prod = {
	product: {
		name: 'Línea Movistar',
		price: '$0'
	}
};
function Info(props) {
	return (
		<div className="card-line">
			<Row>
				<Col xs={3}>
					<i className="icon-movil-tarjeta"></i>
				</Col>
				<Col xs={9}>
					<h2>{props.prod.name}</h2>
					<h3>{props.prod.price}</h3>
				</Col>
			</Row>
			<Button bsStyle="success">Comprar</Button>
		</div>
		);
}
function Card(props) {
	return (
		<Info prod={props.product} />
		);
}
class CardLine extends Component {
	render() {
		return (
			<Card product={prod.product} />
			);
	}
}
export default CardLine;