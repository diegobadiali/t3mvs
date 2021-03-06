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
        currentPlan: null,
      }
    });
  },
  getCart: () => {
    return ({
      device: {
        name: 'Samsung Galaxy A3 4G LTE Negro 32GB',
        description: 'Con un chasis totalmente de metal, el Galaxy A cuenta entre sus características una pantalla Super AMOLED qHD de 4.5 pulgadas, procesador quad-core a 1.2GHz, 1GB de RAM, 16GB de almacenamiento, ranura microSD, cámara principal de 8MP y frontal de 5MP y corre Android 4.4 KitKat. Con un chasis totalmente de metal, el Galaxy A cuenta entre sus características una pantalla Super AMOLED qHD de 4.5 pulgadas, procesador quad-core a 1.2GHz, 1GB de RAM, 16GB de almacenamiento, ranura microSD, cámara principal de 8MP y frontal de 5MP y corre Android 4.4 KitKat',
        price: '$22.000,00',
        cuotas: '$250,00/mes',
        imgURL: 'http://www.movistar.com.ar/documents/10192/14678471/s8.png'
      },
      plan: {
        name: null,
        price: null,
        vencimiento: null,
        imgURL: null,
        onetimecharge: null
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
