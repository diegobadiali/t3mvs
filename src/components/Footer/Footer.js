import React, { Component } from 'react';
import logo from '../../assets/img/logo-footer.png';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer>
  <div className="bg">
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-6">
          <div className="links-footer">
            <ul>
              <li><a href="#">Institucional</a></li>
              <li><a href="#">Legales</a></li>
              <li><a href="#" className="nbr">ENACOM</a></li>
            </ul>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6">
          <div className="redes">
            <span className="hidden-xs">SEGUINOS EN:</span>
            <a title="Facebook" target="_blank" href="http://www.facebook.com/comunidadmovistarargentina">
              <i className="fa fa-facebook"></i>
            </a>
            <a title="Twitter" target="_blank" href="http://twitter.com/movistararg">
              <i className="fa fa-twitter"></i>
            </a>
            <a title="Google Plus" target="_blank" href="https://plus.google.com/u/0/+MovistarArgentina/posts">
              <i className="fa fa-google-plus"></i>
            </a>
            <a title="Instagram" target="_blank" href="http://instagram.com/movistararg">
              <i className="fa fa-instagram"></i>
            </a>
            <a title="Youtube" target="_blank" href="http://www.youtube.com/movistararg">
              <i className="fa fa-youtube-play"></i>
            </a>
            <a title="Pinterest" target="_blank" href="http://pinterest.com/movistararg">
              <i className="fa fa-pinterest"></i>
            </a>
            <a title="Foro" target="_blank" href="https://foro.movistar.com.ar">
              <i className="icon-comunidad"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
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
