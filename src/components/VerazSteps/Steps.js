import React, {Component} from 'react';
import StepItem from './StepItem';
class Steps extends Component {
  render() {
    const stepsItems = this.props.stepData.map((step) => {
      return (
        <div key={step.id} className={step.id === this.props.currentStep ? 'visible' : 'hidden'}>
          <p><strong>{step.question}</strong></p>
          <StepItem
            items={step.answers}
            stepId={step.id}
            addUserAnswer={this.props.addUserAnswer}
          />
        </div>
      );
    });
    return (
      <div className="cont-preguntas">
        {stepsItems}
      </div>
    );
  }
}
export default Steps;