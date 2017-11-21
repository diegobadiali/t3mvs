import React, { Component } from 'react';
var BUTTONS = ['Inicio', 'Factura', 'Pedidos', 'Trámites', 'Nueva línea'];
var listItems = BUTTONS.map((BUTTONS) =>
  <li><a href="#">{BUTTONS}</a></li>
  );
class ListMobile extends Component {
  render() {
    return (
      <ul>
        {listItems}   
      </ul>    
    );
  }
}
export default ListMobile;
