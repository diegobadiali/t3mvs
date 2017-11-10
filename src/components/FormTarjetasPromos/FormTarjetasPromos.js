import React from 'react';
import { Row, Col, Radio, FormControl, FormGroup } from 'react-bootstrap';
import './FormTarjetasPromos.css';
import SelectTarjetas from './SelectTarjetas';
import SelectBancos from './SelectBancos';
import Totales from './Totales';
import pagofacil from '../../assets/img/pagofacil.png';
import rapipago from '../../assets/img/rapipago.png';
const list = [
  {id:1, value: 'Visa', name: 'Visa'},
  {id:2, value: 'Mastercard', name: 'Mastercard'},
  {id:3, value: 'Amex', name: 'Amex'},
  {id:4, value: 'Cabal', name: 'Cabal'},
  {id:5, value: 'Diners', name: 'Diners'},
  {id:6, value: 'Tarjeta Naranja', name: 'Tarjeta Naranja'}
];
const listbancos = {
  cuotas12 : [{
      id: 1,
      name: 'Banco Supervielle',
      value: 'Banco Supervielle',
    },
    { 
      id: 2,
      name: 'Banco Patagonia',
      value: 'Banco Patagonia',
    },
    { 
      id: 3,
      name: 'Banco Columbia',
      value: 'Banco Columbia',
    }
  ],
  cuotas6 : [{
      id: 4,
      name: 'Nativa Mastercard',
      value: 'Nativa Mastercard',
    },
    { 
      id: 5,
      name: 'Banco Columbia',
      value: 'Banco Columbia',
    }
  ],
    cuotas1 : [{
      id: 4,
      name: 'Nativa Mastercard',
      value: 'Nativa Mastercard',
    },
    { 
      id: 5,
      name: 'Banco Columbia',
      value: 'Banco Columbia',
    }
  ]
};
class FormTarjetasPromos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tarjetas: list,
      bancos: listbancos,
      pagotarjeta: false
    };
  }
  handleChange = (e) => {
    switch (e.target.id) {
      case 'opt-tarjeta':
        this.setState({
          pagotarjeta: true,
        });
      break;
      case 'opt-efectivo':
        this.setState({
          pagotarjeta: false
        });
      break;
    }
  };
  render() {
    return (
      <div className="tarjetas-promos">
        <form>
          <Row>
            <Col sm={6}>
              <Radio name="radioGroup" title="Tarjeta de crédito" id="opt-tarjeta" onClick={this.handleChange} inline>
                <p>Tarjeta de crédito</p>
              </Radio>
              <SelectTarjetas pagotarjeta={this.state.pagotarjeta} tarjetas={this.state.tarjetas} />
            </Col>
            <Col sm={6}>
              <a href="#" className="verpromos">Ver promociones sin interés <i className="fa fa-angle-right"></i></a>
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <SelectBancos pagotarjeta={this.state.pagotarjeta} bancos={this.state.bancos}/>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col sm={6}>
              <Radio name="radioGroup" title="Efectivo" id="opt-efectivo" onClick={this.handleChange} inline>
                <p>Efectivo
                <img src={pagofacil} className="logo-efectivo" alt="Pagofacil" />
                <img src={rapipago} className="logo-efectivo" alt="Rapipago" />
                </p>
              </Radio>
            </Col>
            </Row>
          <Totales />
        </form>
      </div>
    );
  }
}
export default FormTarjetasPromos;
