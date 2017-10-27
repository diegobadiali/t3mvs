import React, { Component } from 'react';
import './UserNavMobile.css';
var BUTTONS = ['Mis datos', 'Cambiar contraseña', 'Asociar Línea', 'Gestionar autorizados'];
var listItems = BUTTONS.map((BUTTONS) =>
  <li><a href="#">{BUTTONS}</a></li>
  );
class UserNavMobile extends Component {
  render() {
    return (
      <ul>
        {listItems}   
      </ul>    
    );
  }
}
export default UserNavMobile;
