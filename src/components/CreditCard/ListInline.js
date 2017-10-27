import React, {Component, PropTypes} from 'react';
import {ResolveImage} from './ImageResolver';

class ListInline extends Component {

  constructor(props) {
    super(props);
    this.state = {
      creditCards: this.props.creditCards.length > 0 ? this.props.creditCards.split(',') : [],
      paymentGateways: this.props.paymentGateways.length > 0 ? this.props.paymentGateways.split(',') : [],
      cashGateways: this.props.cashGateways.length > 0 ? this.props.cashGateways.split(',') : [],
    };
  }

  itemList = (itemName, key) => {
    return (
      <li key={key}>
        {ResolveImage(itemName)}
      </li>
    );
  };

  render() {
    let cardsItems = this.state.creditCards.map(this.itemList);
    let paymentItems = this.state.paymentGateways.map(this.itemList);
    let cashItems = this.state.cashGateways.map(this.itemList);
    return (
      <ul className="list-inline">
        {cardsItems}
        {paymentItems}
        {cashItems}
      </ul>
    );
  }
}

/**
 * creditCards: "visa,amex,diners-club,mastercard",
 * paymentGateways: "mercadopago,paypal",
 * cashGateways: "stripe",
 * @type {{creditCards: string, paymentGateways: string, cashGateways: string}}
 */
ListInline.defaultProps = {
  creditCards: "",
  paymentGateways: "",
  cashGateways: "",
};

ListInline.propTypes = {
  creditCards: PropTypes.string,
  paymentGateways: PropTypes.string,
  cashGateways: PropTypes.string,
};


export default ListInline;
