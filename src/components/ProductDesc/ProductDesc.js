import React from 'react';
import './ProductDesc.css';
import { PageHeader } from 'react-bootstrap';
const prod = {
  	product: {
  		name: 'Samsung Galaxy S8 4G LTE',
  		desc: 'Negro - 32GB',
  		price: '$22.000,00',
  		plan: 'Con planes desde $800',
  		imgURL: 'http://www.movistar.com.ar/documents/10192/14678471/s8.png',
  	}
  };
  function Prod(props) {
  	return (
      <div className="bg-prod">
            <div><img className="Foto" src={props.prod.imgURL} alt={props.prod.name} className="img" /></div>
            <div><h2>{props.prod.name}</h2></div>
            <div><h3>{props.prod.desc}</h3></div>
            <div><h4>{props.prod.price}</h4><h5>{props.prod.plan}</h5></div>
      </div>
  	);
  }
  function Producto(props) {
  	return (
  		<div className="product-desc">
        <PageHeader>Elegí el plan para tu equipo</PageHeader>
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
