let DataStoreSupport = {

  getUserData: () => {
    return ({
      isGuest: true,
      data: {
        firstname: 'Juan',
        lastname: 'Pérez',
        dni: '45432123',
        birthday: '1984-01-01',
        phone: '1155667788',
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
        name: 'Samsung Galaxy A3 4G LTE',
        desc: 'Negro 32GB',
        description: 'Con un chasis totalmente de metal, el Galaxy A cuenta entre sus características una pantalla Super AMOLED qHD de 4.5 pulgadas, procesador quad-core a 1.2GHz, 1GB de RAM, 16GB de almacenamiento, ranura microSD, cámara principal de 8MP y frontal de 5MP y corre Android 4.4 KitKat. Con un chasis totalmente de metal, el Galaxy A cuenta entre sus características una pantalla Super AMOLED qHD de 4.5 pulgadas, procesador quad-core a 1.2GHz, 1GB de RAM, 16GB de almacenamiento, ranura microSD, cámara principal de 8MP y frontal de 5MP y corre Android 4.4 KitKat',
        price: '$22.000,00',
        cuotas: '$250,00/mes',
        imgURL: 'http://www.movistar.com.ar/documents/10192/14678471/s8.png'
      },
      plan: {
        name: 'One 10GB',
        price: '$899,00',
        vencimiento: '10/10/2017',
        imgURL: 'https://i.imgur.com/tShwylR.png',
      },
      linea: {
        name: 'Linea Movistar',
        desc: 'SIM Card',
        price: '$0,00'
      },
      retiro: undefined,
      envio: {
        direccion: 'Ruta 16 Km 1,5 - Esteban Echeverría - Buenos Aires 1425/C1425BUG - Barrio Horizontes al Sur',
      },
      orden: '12345678A',
      total: '$22.000,00',
    });
  },

};

module.exports = DataStoreSupport;
