import React, {Component} from 'react';
import {Alert} from 'react-bootstrap';
class Message extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Alert bsStyle={this.props.class}>
        {this.props.class ==='info' ? <i className="fa fa-info-circle"></i> : ''}
        {this.props.class ==='info-plan' ? <i className="fa fa-info-circle"></i> : ''}
        {this.props.class ==='warning' ? <i className="fa fa-exclamation-circle"></i> : ''}
        {this.props.class ==='success' ? <i className="fa fa-check-circle"></i> : ''}
        {this.props.text}
      </Alert>
    );
  }
}
export default Message;