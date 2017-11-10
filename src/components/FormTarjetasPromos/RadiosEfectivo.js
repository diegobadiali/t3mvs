import React from 'react';
import { Radio, FormGroup } from 'react-bootstrap';
import pagofacil from '../../assets/img/pagofacil.png';
import rapipago from '../../assets/img/rapipago.png';
class RadiosEfectivo extends React.Component {
	render() {
		return (
			<Radio name="radioGroup" title="Efectivo" inline>
				<p>Efectivo
        		<img src={pagofacil} className="logo-efectivo" alt="Pagofacil" />
        		<img src={rapipago} className="logo-efectivo" alt="Rapipago" />
        		</p>
      		</Radio>
		);
	}
}
export default RadiosEfectivo;