import React, {Component} from 'react';
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
import VerazUnverified8 from '../../components/VerazSteps/VerazUnverified8';
import VerazUnverified9 from '../../components/VerazSteps/VerazUnverified9';
import VerazUnverified10 from '../../components/VerazSteps/VerazUnverified10';
import VerazUnverified11 from '../../components/VerazSteps/VerazUnverified11';
import VerazUnverified12 from '../../components/VerazSteps/VerazUnverified12';
import VerazUnverified13 from '../../components/VerazSteps/VerazUnverified13';
import VerazUnverified14 from '../../components/VerazSteps/VerazUnverified14';
import VerazUnverified15 from '../../components/VerazSteps/VerazUnverified15';
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
      modalIsOpen8: false,
      modalIsOpen9: false,
      modalIsOpen10: false,
      modalIsOpen11: false,
      modalIsOpen12: false,
      modalIsOpen13: false,
      modalIsOpen14: false,
      modalIsOpen15: false,
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
    this.openModal8 = this.openModal8.bind(this);
    this.closeModal8 = this.closeModal8.bind(this);
    this.openModal9 = this.openModal9.bind(this);
    this.closeModal9 = this.closeModal9.bind(this);
    this.openModal10 = this.openModal10.bind(this);
    this.closeModal10 = this.closeModal10.bind(this);
    this.openModal11 = this.openModal11.bind(this);
    this.closeModal11 = this.closeModal11.bind(this);
    this.openModal12 = this.openModal12.bind(this);
    this.closeModal12 = this.closeModal12.bind(this);
    this.openModal13 = this.openModal13.bind(this);
    this.closeModal13 = this.closeModal13.bind(this);
    this.openModal14 = this.openModal14.bind(this);
    this.closeModal14 = this.closeModal14.bind(this);
    this.openModal15 = this.openModal15.bind(this);
    this.closeModal15 = this.closeModal15.bind(this);
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
  openModal8() {
    this.setState({modalIsOpen8: true});
  }
  closeModal8() {
    this.setState({modalIsOpen8: false});
  }
  openModal9() {
    this.setState({modalIsOpen9: true});
  }
  closeModal9() {
    this.setState({modalIsOpen9: false});
  }
  openModal10() {
    this.setState({modalIsOpen10: true});
  }
  closeModal10() {
    this.setState({modalIsOpen10: false});
  }
  openModal11() {
    this.setState({modalIsOpen11: true});
  }
  closeModal11() {
    this.setState({modalIsOpen11: false});
  }
  openModal12() {
    this.setState({modalIsOpen12: true});
  }
  closeModal12() {
    this.setState({modalIsOpen12: false});
  }
  openModal13() {
    this.setState({modalIsOpen13: true});
  }
  closeModal13() {
    this.setState({modalIsOpen13: false});
  }
  openModal14() {
    this.setState({modalIsOpen14: true});
  }
  closeModal14() {
    this.setState({modalIsOpen14: false});
  }
  openModal15() {
    this.setState({modalIsOpen15: true});
  }
  closeModal15() {
    this.setState({modalIsOpen15: false});
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
             <button className="btn-modal" onClick={this.openModal9}>Ver modal 9 <i className="fa fa-angle-right"></i> </button>
             <button className="btn-modal" onClick={this.openModal10}>Ver modal 10 <i className="fa fa-angle-right"></i> </button>
             <button className="btn-modal" onClick={this.openModal11}>Ver modal 11 <i className="fa fa-angle-right"></i> </button>
             <button className="btn-modal" onClick={this.openModal12}>Ver modal 12 <i className="fa fa-angle-right"></i> </button>
             <button className="btn-modal" onClick={this.openModal13}>Ver modal 13 <i className="fa fa-angle-right"></i> </button>
             <button className="btn-modal" onClick={this.openModal14}>Ver modal 14 <i className="fa fa-angle-right"></i> </button>
             <button className="btn-modal" onClick={this.openModal15}>Ver modal 15 <i className="fa fa-angle-right"></i> </button>
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

            <Modal
              isOpen={this.state.modalIsOpen8}
              onRequestClose={this.closeModal8}
              style={customStyles}
              overlayClassName="Overlay"
            >
              <button className="btn-cerrar" onClick={this.closeModal8}><i className="fa fa-close"></i> </button>
              <div className="preguntas">
                <VerazUnverified8 />
              </div>
            </Modal>

            <Modal
              isOpen={this.state.modalIsOpen9}
              onRequestClose={this.closeModal9}
              style={customStyles}
              overlayClassName="Overlay"
            >
              <button className="btn-cerrar" onClick={this.closeModal9}><i className="fa fa-close"></i> </button>
              <div className="preguntas">
                <VerazUnverified9 />
              </div>
            </Modal>

            <Modal
              isOpen={this.state.modalIsOpen10}
              onRequestClose={this.closeModal10}
              style={customStyles}
              overlayClassName="Overlay"
            >
              <button className="btn-cerrar" onClick={this.closeModal10}><i className="fa fa-close"></i> </button>
              <div className="preguntas">
                <VerazUnverified10 />
              </div>
            </Modal>

            <Modal
              isOpen={this.state.modalIsOpen11}
              onRequestClose={this.closeModal11}
              style={customStyles}
              overlayClassName="Overlay"
            >
              <button className="btn-cerrar" onClick={this.closeModal11}><i className="fa fa-close"></i> </button>
              <div className="preguntas">
                <VerazUnverified11 />
              </div>
            </Modal>

            <Modal
              isOpen={this.state.modalIsOpen12}
              onRequestClose={this.closeModal12}
              style={customStyles}
              overlayClassName="Overlay"
            >
              <button className="btn-cerrar" onClick={this.closeModal12}><i className="fa fa-close"></i> </button>
              <div className="preguntas">
                <VerazUnverified12 />
              </div>
            </Modal>

            <Modal
              isOpen={this.state.modalIsOpen13}
              onRequestClose={this.closeModal13}
              style={customStyles}
              overlayClassName="Overlay"
            >
              <button className="btn-cerrar" onClick={this.closeModal13}><i className="fa fa-close"></i> </button>
              <div className="preguntas">
                <VerazUnverified13 />
              </div>
            </Modal>

            <Modal
              isOpen={this.state.modalIsOpen14}
              onRequestClose={this.closeModal14}
              style={customStyles}
              overlayClassName="Overlay"
            >
              <button className="btn-cerrar" onClick={this.closeModal14}><i className="fa fa-close"></i> </button>
              <div className="preguntas">
                <VerazUnverified14 />
              </div>
            </Modal>

            <Modal
              isOpen={this.state.modalIsOpen15}
              onRequestClose={this.closeModal15}
              style={customStyles}
              overlayClassName="Overlay"
            >
              <button className="btn-cerrar" onClick={this.closeModal15}><i className="fa fa-close"></i> </button>
              <div className="preguntas">
                <VerazUnverified15 />
              </div>
            </Modal>

          </Col>
        </Row>
      </Grid>
    );
  }
}
export default Home;