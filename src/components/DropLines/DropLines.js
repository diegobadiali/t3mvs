import React, { Component } from 'react';
import { NavDropdown } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';
import './DropLines.css';
var line = "1585345345";
var LINES = ['1585345345', '1585345344', '1585345343'];
var listLines = LINES.map((LINES) =>
  <MenuItem eventKey={1}>{LINES}</MenuItem>
);
class DropLines extends Component {
  render() {
    return (
      <NavDropdown eventKey={1} title={line} id="">
        {listLines}
      </NavDropdown>
      );
  }
}
export default DropLines;

