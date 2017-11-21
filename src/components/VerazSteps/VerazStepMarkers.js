import React, {Component} from 'react';
class VerazStepMarkers extends Component {
  render() {
    const markerItems = this.props.stepData.map((step) => {
      return (
        <li key={step.id} className={step.id === this.props.currentStep ? 'active' : '' || step.id < this.props.currentStep ? 'off' : ''}>
          <span>{step.id}</span>
        </li>
      );
    });
    return (
      <div className="bg-pasos">
        <ul className="list-inline">
          {markerItems}
        </ul>
      </div>
    );
  }
}
export default VerazStepMarkers;