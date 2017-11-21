import React, { Component } from 'react';
import DropUser from '../DropUser/DropUser';
import { Button } from 'react-bootstrap';
class Nav extends Component {
  render() {
    return (
      <div className="navbar-user">
        <div className="nav navbar-nav">
          <DropUser />
        </div>
      </div>
    );
  }
}
export default Nav;
