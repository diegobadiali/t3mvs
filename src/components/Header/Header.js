import React, {Component} from 'react';
import logo from '../../assets/img/logo.png';
import logoMobile from '../../assets/img/logo-mobile.png';
import DropUser from '../DropUser/DropUser';
import BtnMiMovistar from '../BtnMiMovistar/BtnMiMovistar';
class Header extends Component {

  render() {
    return (
      <div className="header">
        <nav className="navbar navbar-custom">
          <div className="container">
            <div className="navbar-header">
              {(this.props.userAuth.isGuest == false) ? <DropUser {...this.props.userAuth.data}/> : <BtnMiMovistar /> }
              <img src={logo} className="App-logo" alt="Movistar"/>
              <img src={logoMobile} className="App-logo-Mobile" alt="Movistar"/>
            </div>
          </div>
        </nav>
      </div>

    );
  }
}

export default Header;
