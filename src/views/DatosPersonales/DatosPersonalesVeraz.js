import React from 'react';
import {Button, Col, Row} from 'react-bootstrap';
import Modal from 'react-modal';
import VerazSteps from '../../components/VerazSteps/VerazSteps';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};


class DatosPersonalesVeraz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };
  }

  closeModal = () => {
    this.setState({modalIsOpen: false});
  };

  openModal = () => {
    this.setState({modalIsOpen: true});
  };

  handleVerified = () => {
    this.closeModal();
    this.props.onVerified();
  };

  render() {
    return (
      <Row>
        <Col sm={12}>
          <Button
            bsStyle="success"
            disabled={this.props.disabled}
            onClick={this.openModal}>
            Continuar
          </Button>
          <Modal
            onExit={this.state.closeModal}
            isOpen={this.state.modalIsOpen}
            style={customStyles}
            overlayClassName="Overlay"
          >
            <button className="btn-cerrar" onClick={this.closeModal}>
              <i className="fa fa-close"/>
            </button>

            <div>
              <VerazSteps
                onFinish={this.handleVerified}
              />
            </div>

          </Modal>
        </Col>
      </Row>
    );
  }
}
export default DatosPersonalesVeraz;