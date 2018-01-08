import React, { Component } from 'react';
import logo from '../../assets/img/logo-footer.png';
class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="copy">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6"><p><img src={logo} className="App-logo" alt="Movistar" /> © 2017 Movistar. Telefónica. Todos los derechos reservados.</p></div>
              </div>
            </div>
          </div>
      </footer>
    );
  }
}
export default Footer;
