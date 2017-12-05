import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import FormTarjetasPromos from '../../components/FormTarjetasPromos/FormTarjetasPromos';
var title = "Promociones con Tarjeta de Crédito";
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
class ModalPromociones extends React.Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal() {
    this.setState({modalIsOpen: true});
  }
  closeModal() {
    this.setState({modalIsOpen: false});
  }
  render() {
    return (
      <div>
        <button className="btn-modal" onClick={this.openModal}>Ver promociones <i className="fa fa-angle-right"></i> </button>
        <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal} style={customStyles} overlayClassName="Overlay">
          <button className="btn-cerrar" onClick={this.closeModal}><i className="fa fa-close"></i> </button>
          <h2>{title}</h2>
          <FormTarjetasPromos />
        </Modal>
      </div>
    );
  }
}
export default ModalPromociones;
