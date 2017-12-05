import React, { Component } from 'react';
import logo from '../../assets/img/logo-footer.png';
class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="copy">
          <div className="container">
            <div className="row">
            <div className="col-xs-12">
                  <div className="links-footer links-footer-xs">
                    <ul>
                      <li><a href="http://www.movistar.com.ar/institucional/quienes-somos/" target="_blank">Institucional</a></li>
                      <li><a href="http://www.movistar.com.ar/legales/generales" target="_blank">Legales</a></li>
                      <li><a href="http://www.enacom.gob.ar/" className="nbr" target="_blank">ENACOM</a></li>
                    </ul>
                  </div>
                </div>
              <div className="col-sm-12 col-md-6"><p><img src={logo} className="App-logo" alt="Movistar" /> © 2017 Movistar. Telefónica. Todos los derechos reservados.</p></div>
                <div className="col-sm-12 col-md-6">
                  <div className="links-footer">
                    <ul>
                      <li><a href="http://www.movistar.com.ar/institucional/quienes-somos/" target="_blank">Institucional</a></li>
                      <li><a href="http://www.movistar.com.ar/legales/generales" target="_blank">Legales</a></li>
                      <li><a href="http://www.enacom.gob.ar/" className="nbr" target="_blank">ENACOM</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </footer>
    );
  }
}
export default Footer;
