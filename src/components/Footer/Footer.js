import React, { Component } from 'react';
import logo from '../../assets/img/logo-footer.png';
class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="copy">
          <div className="container">
            <p><img src={logo} className="App-logo" alt="Movistar" /> © 2017 Movistar. Telefónica. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
