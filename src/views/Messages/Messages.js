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
import VerazUnverified4 from '../../components/VerazSteps/VerazUnverified4';
import VerazUnverified5 from '../../components/VerazSteps/VerazUnverified5';
import VerazUnverified6 from '../../components/VerazSteps/VerazUnverified6';
import VerazUnverified7 from '../../components/VerazSteps/VerazUnverified7';
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
const infotabla = {
  itemList : [{
      id: 1,
      street: 'Belgrano',
      number: '678',
      locality: 'Ciudad Autónoma de Buenos Aires',
      city: 'Buenos Aires',
      zipcode: '1234',
    },
    { 
      id: 2,
      street: 'Belgrano',
      number: '678',
      locality: 'Ciudad Autónoma de Buenos Aires',
      city: 'Buenos Aires',
      zipcode: '1234',
    }
  ],
};
class Home extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      modalIsOpen2: false,
      modalIsOpen3: false,
      modalIsOpen4: false,
      modalIsOpen5: false,
      modalIsOpen6: false,
      modalIsOpen7: false,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal2 = this.openModal2.bind(this);
    this.closeModal2 = this.closeModal2.bind(this);
    this.openModal3 = this.openModal3.bind(this);
    this.closeModal3 = this.closeModal3.bind(this);
    this.openModal4 = this.openModal4.bind(this);
    this.closeModal4 = this.closeModal4.bind(this);
    this.openModal5 = this.openModal5.bind(this);
    this.closeModal5 = this.closeModal5.bind(this);
    this.openModal6 = this.openModal6.bind(this);
    this.closeModal6 = this.closeModal6.bind(this);
    this.openModal7 = this.openModal7.bind(this);
    this.closeModal7 = this.closeModal7.bind(this);
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
  openModal4() {
    this.setState({modalIsOpen4: true});
  }
  closeModal4() {
    this.setState({modalIsOpen4: false});
  }
  openModal5() {
    this.setState({modalIsOpen5: true});
  }
  closeModal5() {
    this.setState({modalIsOpen5: false});
  }
  openModal6() {
    this.setState({modalIsOpen6: true});
  }
  closeModal6() {
    this.setState({modalIsOpen6: false});
  }
  openModal7() {
    this.setState({modalIsOpen7: true});
  }
  closeModal7() {
    this.setState({modalIsOpen7: false});
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
             <button className="btn-modal" onClick={this.openModal4}>Ver modal 4 <i className="fa fa-angle-right"></i> </button>
             <button className="btn-modal" onClick={this.openModal5}>Ver modal 5 <i className="fa fa-angle-right"></i> </button>
             <button className="btn-modal" onClick={this.openModal6}>Ver modal 6 <i className="fa fa-angle-right"></i> </button>
             <button className="btn-modal" onClick={this.openModal7}>Ver modal 7 <i className="fa fa-angle-right"></i> </button>
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

            <Modal
              isOpen={this.state.modalIsOpen4}
              onRequestClose={this.closeModal4}
              style={customStyles}
              overlayClassName="Overlay"
            >
              <button className="btn-cerrar" onClick={this.closeModal4}><i className="fa fa-close"></i> </button>
              <div className="preguntas">
                <VerazUnverified4 />
              </div>
            </Modal>

            <Modal
              isOpen={this.state.modalIsOpen5}
              onRequestClose={this.closeModal5}
              style={customStyles}
              overlayClassName="Overlay"
            >
              <button className="btn-cerrar" onClick={this.closeModal5}><i className="fa fa-close"></i> </button>
              <div className="preguntas">
                <VerazUnverified5 />
              </div>
            </Modal>

            <Modal
              isOpen={this.state.modalIsOpen6}
              onRequestClose={this.closeModal6}
              style={customStyles}
              overlayClassName="Overlay"
            >
              <button className="btn-cerrar" onClick={this.closeModal6}><i className="fa fa-close"></i> </button>
              <div className="preguntas">
                <VerazUnverified6 />
              </div>
            </Modal>

            <Modal
              isOpen={this.state.modalIsOpen7}
              onRequestClose={this.closeModal7}
              style={customStyles}
              overlayClassName="Overlay"
            >
              <button className="btn-cerrar" onClick={this.closeModal7}><i className="fa fa-close"></i> </button>
              <div className="preguntas">
                <VerazUnverified7 infotabla={infotabla}/>
              </div>
            </Modal>

          </Col>
        </Row>
      </Grid>
    );
  }
}
export default Home;