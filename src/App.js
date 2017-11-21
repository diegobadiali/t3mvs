import React, {Component} from 'react';
//import logo from './assets/img/logo.svg';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SimpleReactRouter from 'simple-react-router'
import ElegiPlanEquipo from './views/ElegiPlanLineaNueva/ElegiPlanEquipo';
import ElegiPlanEquipoSinPlanes from './views/ElegiPlanLineaNueva/ElegiPlanEquipoSinPlanes';
import ElegiPlanLineaSinPlanes from './views/ElegiPlanLineaNueva/ElegiPlanLineaSinPlanes';
import ElegiPlanEquipoNoPic from './views/ElegiPlanLineaNueva/ElegiPlanEquipoNoPic';
import ElegiPlanLinea from './views/ElegiPlanLineaNueva/ElegiPlanLinea';
import ResumenCompra from './views/ResumenCompra/ResumenCompra';
import ResumenCompraEquipo from './views/ResumenCompra/ResumenCompraEquipo';
import ResumenCompraLinea from './views/ResumenCompra/ResumenCompraLinea';
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
    map('/elegi-plan-para-tu-equipo',   ElegiPlanEquipo)
    map('/elegi-plan-para-tu-equipo/:mode',   ElegiPlanEquipo)
    map('/elegi-plan-para-tu-equipo-sin-planes',   ElegiPlanEquipoSinPlanes)
    map('/elegi-plan-para-tu-linea-sin-planes',   ElegiPlanLineaSinPlanes)
    map('/elegi-plan-para-tu-equipo-no-pic',   ElegiPlanEquipoNoPic)
    map('/elegi-plan-para-tu-equipo-no-pic/:mode',   ElegiPlanEquipoNoPic)
    map('/elegi-plan-para-tu-linea/:mode',     ElegiPlanLinea)
    map('/elegi-plan-para-tu-linea',     ElegiPlanLinea)
    map('/resumen-de-compra',            ResumenCompra)
    map('/resumen-de-compra-equipo',     ResumenCompraEquipo)
    map('/resumen-de-compra-linea',      ResumenCompraLinea)
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
