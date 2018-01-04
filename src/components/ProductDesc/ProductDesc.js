import React from 'react';
import { PageHeader } from 'react-bootstrap';
  class ProductDetail extends React.Component {
  	render() {
  		return (
         <div className="product-desc">
         <PageHeader>Elegí el plan para tu {this.props.type}</PageHeader>
         <div className="bg-prod">
           <div><img className="Foto" src={!this.props.prod.imgURL ? require('../../assets/img/img-default.png') : this.props.prod.imgURL} alt={this.props.prod.name} className="img" /></div>
           <div><h2>{this.props.prod.name}</h2>
            {this.props.prod.desc ? 
            <h3>{this.props.prod.desc}</h3>
            : ''
           }
           </div>
           <div><h4>{this.props.prod.price}</h4><h5>{this.props.prod.plan}</h5></div>
         </div>
         <div className="clearfix visible-xs"></div>
        </div>
		  );
  	}
  }
export default ProductDetail;
