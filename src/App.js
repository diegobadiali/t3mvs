import React, {Component} from 'react';
//import logo from './assets/img/logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SimpleReactRouter from 'simple-react-router'
import ElegiPlanLineaNueva from './views/ElegiPlanLineaNueva/ElegiPlanLineaNueva';
import ElegiPlanLinea from './views/ElegiPlanLineaNueva/ElegiPlanLinea';
import ResumenCompra from './views/ResumenCompra/ResumenCompra';
import ResumenCompraEquipo from './views/ResumenCompra/ResumenCompraEquipo';
import Indice from './views/Indice/Indice';
import Home from './views/Home/Home';
import DatosPersonales from './views/DatosPersonales/DatosPersonales';
import ThankYouPage from './views/ThankYouPage/ThankYouPage';
import ThankYouPagePlan from './views/ThankYouPage/ThankYouPagePlan';
import ThankYouPageEquipo from './views/ThankYouPage/ThankYouPageEquipo';
import DataStoreSupport from './DataStoreSupport';
import Messages from './views/Messages/Messages';
import EntregaYPago from './views/EntregaYPago/EntregaYPago';
import MercadoPago from './views/MercadoPago/MercadoPago';


class Router extends SimpleReactRouter {
  routes(map){
    map('/',                             Indice)
    map('/elegi-plan-con-linea-nueva',   ElegiPlanLineaNueva)
    map('/elegi-plan-para-tu-linea',     ElegiPlanLinea)
    map('/resumen-de-compra',            ResumenCompra)
    map('/resumen-de-compra-equipo',     ResumenCompraEquipo)
    map('/home',                         Home)
    map('/datos-personales/:mode',       DatosPersonales)
    map('/thank-you-page',               ThankYouPage)
    map('/thank-you-page-plan',          ThankYouPagePlan)
    map('/thank-you-page-equipo',        ThankYouPageEquipo)
    map('/messages',                     Messages)
    map('/entrega-y-pago/:mode',         EntregaYPago)
    map('/mercadopago',                  MercadoPago)
  }
}

class App extends Component {

  render() {
    return (
      <div className="App" id="page-wrap">
        <Header userAuth={DataStoreSupport.getUserData()}/>
        <Router />
        <Footer />
      </div>
    );
  }
}

export default App;
