import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import Steps from './Steps';
import VerazStepMarkers from './VerazStepMarkers';
import VerazUnverified from './VerazUnverified';
import verazVerificationSteps from './VerazStepsSampleData';
import './Veraz.css';
const verificationStatus = {
  UNVERIFIED: "unverified",
  PENDING: "pending",
};
class VerazSteps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      verificationStatus: verificationStatus.PENDING,
      userAnswers: [],
    };
  }
  handleAddUserAnswer = (stepId, answerId) => {
    const currentAnswers = this.state.userAnswers;
    currentAnswers.push({
      stepId: stepId,
      answerId: answerId,
    });
    this.setState({
      userAnswers: currentAnswers
    });
  };

  /**
   * Funcion para simular la validacion, cuando se integre será la entidad Veraz la que lo valide.
   */
  validate = () => {

    let valid = true;
    this.state.userAnswers.map((answer) => {
      if (answer.stepId === 1 && answer.answerId == 1) {
        valid = false;
      }
    });

    if (valid) {
      this.props.onFinish();
    } else {
      this.setState({
        verificationStatus: verificationStatus.UNVERIFIED,
      });
    }

  };

  handleNext = () => {
    if (this.state.currentStep < verazVerificationSteps.length) {
      this.setState({
        currentStep: this.state.currentStep + 1
      });
    } else {
      this.validate();
    }
  };

  render() {
    let content = '';
    if (this.state.verificationStatus === verificationStatus.PENDING) {
      content = (
        <div>
          <h2>Repondé estas preguntas para verificar tu identidad</h2>
          <Steps
            stepData={verazVerificationSteps}
            currentStep={this.state.currentStep}
            addUserAnswer={this.handleAddUserAnswer}
          />

          <VerazStepMarkers
            stepData={verazVerificationSteps}
            currentStep={this.state.currentStep}
          />

          <div>
            <Button bsStyle="success" onClick={this.handleNext}>
              Siguiente
            </Button>
          </div>

        </div>
      );
    }

    if (this.state.verificationStatus === verificationStatus.UNVERIFIED) {
      content = (
        <VerazUnverified/>
      );
    }

    return (
      <div className="preguntas">
        {content}
      </div>
    );
  }
}
export default VerazSteps;