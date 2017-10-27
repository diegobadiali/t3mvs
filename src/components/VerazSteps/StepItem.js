import React, {Component} from 'react';
import {FormGroup, Radio} from 'react-bootstrap';

class StepItem extends Component {

  handleClick = (event) => {
    this.props.addUserAnswer(this.props.stepId, event.target.value);
  };

  render() {
    const items = this.props.items.map((item, key) => {
      return (
        <Radio
          name="radioGroup"
          key={key}
          onChange={this.handleClick}
          value={item.id}
        >
          {item.text}
        </Radio>
      );
    });
    return (
      <FormGroup>
        {items}
      </FormGroup>
    );
  }
}
export default StepItem;