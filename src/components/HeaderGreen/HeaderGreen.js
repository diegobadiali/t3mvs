import React, { Component } from 'react';
import logo from '../../assets/img/logo-white.svg';
import { Button } from 'react-bootstrap';
import Nav from '../Nav/Nav';
import NavMobile from '../NavMobile/NavMobile';

class HeaderGreen extends Component {
  render() {
    return (
      <div className="header-green">
        <nav className="navbar navbar-custom">
          <div className="container">
            <div className="navbar-header">
              <img src={logo} className="App-logo" alt="Movistar" />
            </div>
            <Nav />
          </div>
          <NavMobile /> 
        </nav> 
      </div>

      );
  }
}

export default HeaderGreen;
