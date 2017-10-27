import React from 'react';

import amex from '../../assets/img/amex.png';
import cabal from '../../assets/img/cabal.png';
import diners from '../../assets/img/diners.png';
import master from '../../assets/img/master.png';
import visa from '../../assets/img/visa.png';
import mercadopago from '../../assets/img/mercadopago.png';
import pagofacil from '../../assets/img/pagofacil.png';
import rapipago from '../../assets/img/rapipago.png';

export function ResolveImage(itemName) {
  switch (itemName) {
    case 'visa':
      return (
        <img src={visa} className="credit-card" alt="Visa"/>
      );
    case 'amex':
      return (
        <img src={amex} className="credit-card" alt="Amex"/>
      );
    case 'cabal':
      return (
        <img src={cabal} className="credit-card" alt="Cabal"/>
      );
    case 'diners':
      return (
        <img src={diners} className="credit-card" alt="Diners"/>
      );
    case 'master':
      return (
        <img src={master} className="credit-card" alt="Mastercard"/>
      );
    case 'mercadopago':
      return (
        <img src={mercadopago} className="credit-card" alt="Mercado Pago"/>
      );

    case 'pagofacil':
      return (
        <img src={pagofacil} className="credit-card" alt="Pago Fácil"/>
      );

    case 'rapipago':
      return (
        <img src={rapipago} className="credit-card" alt="Rapipago"/>
      );

    default:
      return (
        <i className={"fa fa-cc-" + itemName.trim()}/>
      );
  }


}
