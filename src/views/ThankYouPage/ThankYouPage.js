import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import Listo from '../../components/Listo/Listo';
import NumeroLinea from '../../components/NumeroLinea/NumeroLinea';
import DetalleCompra from '../../components/DetalleCompra/DetalleCompra';
import DataStoreSupport from '../../DataStoreSupport';
class ThankYouPage extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      datosPersonales: {
        userData: {
          phone: DataStoreSupport.getUserData()
        }
      },
      cart: DataStoreSupport.getCart(),
    };
  }
  componentDidMount() {
    /* FIXME: Solo para fines del maquetado */
    document.getElementById('mimovistar-btn').style.visibility = "hidden";
    let newDatosPersonales = Object.assign({}, this.state.datosPersonales);
    if (!DataStoreSupport.getUserData().isGuest) {
      newDatosPersonales.userData = DataStoreSupport.getUserData().data;
      newDatosPersonales.verifiedData = true;
    }
    this.setState({
      cart: DataStoreSupport.getCart(),
      datosPersonales: newDatosPersonales,
    });
  }
  render() {
    return (
      <div>
        <Grid>
          <Listo />
          <NumeroLinea {...this.state.datosPersonales.userData.phone}/>
          <DetalleCompra cart={this.state.cart}/>
        </Grid>
      </div>
      );
  }
}
export default ThankYouPage;