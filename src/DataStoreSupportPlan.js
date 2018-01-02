let DataStoreSupport = {

  getUserData: () => {
    return ({
      isGuest: true,
      data: {
        firstname: 'Juan',
        lastname: 'Pérez',
        dni: '45432123',
        birthday: '1984-01-01',
        codarea: '11',
        phone: '55667788',
        email: 'juan@example.com',
        gender: 'Masculino',
        address: {
          street: 'Los álamos',
          number: '1234',
          floor: '5',
          apartment: 'B',
          locality: 'CABA',
          city: 'CABA',
        },
        creditCards: [
          {id: 1, number: '1111222233334444', type: 'visa'},
          {id: 2, number: '5555666677778888', type: 'mastercard'},
        ],
        currentPlan: null,
      }
    });
  },
  getCart: () => {
    return ({
      device: {
        name: null,
        desc: null,
        description: null,
        price: null,
        cuotas: null,
        imgURL: null
      },
        plan: {
        name: 'One 10GB',
        price: '$899,00',
        vencimiento: '10/10/2017',
        imgURL: 'https://i.imgur.com/tShwylR.png',
        onetimecharge: '$55,00'
      },
      linea: {
        name: 'Linea Movistar',
        desc: 'SIM Card',
        price: '$0,00'
      },
      retiro: {
        direccion: 'Almagro - Av. Corrientes 2973',
        horario: 'Lunes a viernes de 9 a 19hs'
      },
      envio: undefined,
      orden: '12345678A',
      total: '',
    });
  },

};

module.exports = DataStoreSupport;
