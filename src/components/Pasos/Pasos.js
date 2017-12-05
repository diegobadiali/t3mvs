import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
function Steps(props) {
  const content = props.items.map((post) =>
    <li key={post.id} className={(props.currentStep == post.id) ? 'active':'' || (props.currentStep > post.id) ? 'off':''  }><span>{post.title}</span></li>
  );
  return (
    <div className="pasos">
    	<Grid>
    		<div className="bg-pasos">
    	  		<ol>{content}</ol>
    	    </div>
    	</Grid>
    </div>
  );
}
const items = [
  {id: '1', title: 'Selección de plan'},
  {id: '2', title: 'Datos personales y facturación'},
  {id: '3', title: 'Entrega y pago'}
];
class Pasos extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      currentStep: 1,
    };
  }
	render() {
		return (
			<Steps items={items} currentStep={this.props.currentStep} />	
		);
	}
}
export default Pasos;


