import React, { Component } from 'react';
import './UserInfo.css';
var name = 'Luna Kaiser';
var status = 'Activa';
var date = '(desde 01/01/2013)';
class UserInfo extends Component {
  render() {
    return (
		<div>
		<span className="user-image"><i className="icon-mi-movistar"></i> </span>
      	<div className="user-info">
      		<span className="user-name">{name}</span>
      		<span className="user-status"><strong>{status}</strong> {date}</span>
      	</div>
		</div>
            );
  }
}
export default UserInfo;