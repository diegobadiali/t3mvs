import React from 'react';
import { PageHeader } from 'react-bootstrap';
import icon from '../../assets/img/img-chip2.png';
const prod = {
  	product: {
  		name: 'Línea Movistar',
  		price: '$0,00'
  	}
  };
  function Prod(props) {
  	return (
      <div className="bg-prod bg-line">
            <div><img className="Foto" src={icon} alt={props.prod.name} className="icon" /></div>
            <div><h2>{props.prod.name}</h2></div>
            <div><h4>{props.prod.price}</h4></div>
      </div>
  	);
  }
  function Producto(props) {
  	return (
  		<div className="product-desc">
        <PageHeader>Elegí el plan para tu línea</PageHeader>
        <Prod prod={props.product} />
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
