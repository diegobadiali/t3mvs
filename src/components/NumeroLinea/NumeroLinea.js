import React, { Component } from 'react';
import './NumeroLinea.css';
class NumeroLinea extends Component {
	constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="numero-linea">
        <span>Número de línea</span>
        <h4>{this.props.data.phone}</h4>
      </div>
      );
  }
}
export default NumeroLinea;
