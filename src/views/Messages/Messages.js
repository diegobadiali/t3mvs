import React, {Component} from 'react';
import './Messages.css';
import {Grid} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {PageHeader} from 'react-bootstrap';
import Modal from 'react-modal';
import VerazUnverified from '../../components/VerazSteps/VerazUnverified';
import VerazUnverified2 from '../../components/VerazSteps/VerazUnverified2';
import VerazUnverified3 from '../../components/VerazSteps/VerazUnverified3';
import '../../components/VerazSteps/Veraz.css';
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
class Home extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      modalIsOpen2: false,
      modalIsOpen3: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal2 = this.openModal2.bind(this);
    this.closeModal2 = this.closeModal2.bind(this);
    this.openModal3 = this.openModal3.bind(this);
    this.closeModal3 = this.closeModal3.bind(this);
  }
  openModal() {
    this.setState({modalIsOpen: true});
  }
  closeModal() {
    this.setState({modalIsOpen: false});
  }
  openModal2() {
    this.setState({modalIsOpen2: true});
  }
  closeModal2() {
    this.setState({modalIsOpen2: false});
  }
  openModal3() {
    this.setState({modalIsOpen3: true});
  }
  closeModal3() {
    this.setState({modalIsOpen3: false});
  }
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <PageHeader>Mensajes en modals</PageHeader>
             <button className="btn-modal" onClick={this.openModal}>Ver modal 1 <i className="fa fa-angle-right"></i> </button>
             <button className="btn-modal" onClick={this.openModal2}>Ver modal 2 <i className="fa fa-angle-right"></i> </button>
             <button className="btn-modal" onClick={this.openModal3}>Ver modal 3 <i className="fa fa-angle-right"></i> </button>
            <Modal
              isOpen={this.state.modalIsOpen}
              onRequestClose={this.closeModal}
              style={customStyles}
              overlayClassName="Overlay"
            >
              <button className="btn-cerrar" onClick={this.closeModal}><i className="fa fa-close"></i> </button>
              <div className="preguntas">
                <VerazUnverified />
              </div>
            </Modal>
            <Modal
              isOpen={this.state.modalIsOpen2}
              onRequestClose={this.closeModal2}
              style={customStyles}
              overlayClassName="Overlay"
            >
              <button className="btn-cerrar" onClick={this.closeModal2}><i className="fa fa-close"></i> </button>
              <div className="preguntas">
                <VerazUnverified2 />
              </div>
            </Modal>

            <Modal
              isOpen={this.state.modalIsOpen3}
              onRequestClose={this.closeModal3}
              style={customStyles}
              overlayClassName="Overlay"
            >
              <button className="btn-cerrar" onClick={this.closeModal3}><i className="fa fa-close"></i> </button>
              <div className="preguntas">
                <VerazUnverified3 />
              </div>
            </Modal>

          </Col>
        </Row>
      </Grid>
    );
  }
}
export default Home;