import React from 'react';
import './InfoTarjetas.css';
import { Button, Table, Row, Col } from 'react-bootstrap';
import ModalPromociones from '../../components/ModalPromociones/ModalPromociones';
import amex from '../../assets/img/amex.png';
import cabal from '../../assets/img/cabal.png';
import diners from '../../assets/img/diners.png';
import master from '../../assets/img/master.png';
import visa from '../../assets/img/visa.png';
class InfoTarjetas extends React.Component {
	render() {
		return (
			<div className="info-tarjetas">
				<Row>
					<Col sm={9}>
						<p><i className="fa fa-credit-card"></i> Pagá en hasta <strong>18 cuotas</strong><br className="visible-xs" />
							<img src={visa} className="credit-card" alt="Visa" />
							<img src={master} className="credit-card" alt="Mastercard" />
							<img src={amex} className="credit-card" alt="Amex" />
							<img src={diners} className="credit-card" alt="Diners" />
							<img src={cabal} className="credit-card" alt="Cabal" />
						</p>
						<ModalPromociones />
						<p><i className="fa fa-truck"></i> <strong>Envío gratis</strong> en toda Argentina
						</p>
					</Col>
				</Row>
			</div>
			);
	}
}
export default InfoTarjetas;
