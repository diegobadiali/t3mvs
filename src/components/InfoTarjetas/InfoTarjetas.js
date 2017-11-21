import React from 'react';
import { Button, Table, Row, Col } from 'react-bootstrap';
import ModalPromociones from '../../components/ModalPromociones/ModalPromociones';
const list = [
  {id:1, img: require('../../assets/img/visa.png'), name: 'Visa'},
  {id:2, img: require('../../assets/img/mastercard.png'), name: 'Mastercard'},
  {id:3, img: require('../../assets/img/amex.png'), name: 'AMEX'},
  {id:4, img: require('../../assets/img/cabal.png'), name: 'Cabal'},
  {id:5, img: require('../../assets/img/diners.png'), name: 'Diners'},
  {id:6, img: require('../../assets/img/tarjeta-naranja.png'), name: 'Tarjeta Naranja'},
];
function ImgTarjetas(props) {
  const tarjetas = (
  	<p><i className="fa fa-credit-card"></i> Pagá en hasta <strong>18 cuotas</strong><br className="visible-xs" />
      {props.list.map((post) =>
        <img src={post.img} className="credit-card" alt={post.name} key={post.id} />
      )}
      </p>
  );
  return (
  	<div className="info-tarjetas">
		<Row>
			<Col sm={9}>
				{tarjetas}
				<ModalPromociones />
				<p><i className="fa fa-truck"></i> <strong>Envío gratis</strong> en toda Argentina</p>
			</Col>
		</Row>
	</div>      
  );
}
class InfoTarjetas extends React.Component {
	constructor(){
    	super();
  	}
	render() {
		return (
			<ImgTarjetas list={list} />
		);
	}
}
export default InfoTarjetas;
