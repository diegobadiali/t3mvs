let DataProducts = {

  getProducts: () => {
    return ({
      data: {
        facturalibre: [
        {
            id: 1,
            speed: '10GB',
            name: 'Plan One 10GB',
            habla: 'Libre a todos las compañías y teléfonos fijos de Telefónica',
            mensajea: 'Libre a cualquier compañía',
            navega: '10GB incluidos, luego internet x Día Plus (50MBx$7,50)',
            credito: '-',
            extra: '-',
            beneficios: 'Destinos de América a precio local',
            price: '$21.000,00',
            planprice: '$889',
            link: '#',
          },
          { id: 2,
            speed: '7GB',
            name: 'Plan One 7GB',
            habla: 'Libre a todos los Movistar y 50 min. a otras compañías',
            mensajea: 'Libre a cualquier compañía',
            navega: '7GB incluidos, luego internet x Día Plus (50MBx$7,50)',
            credito: '-',
            extra: '-',
            beneficios: 'Destinos de América a precio local',
            price: '$21.000,00',
            planprice: '$679',
            link: '#',
            recomendado: true
          }
          ],
        facturafija: [
        {
            id: 5,
            speed: '4GB',
            name: 'Comunidad 2GB',
            habla: 'Libre a todos los Movistar y 500 min. a otras compañías',
            mensajea: 'Libre a cualquier compañía móvil',
            navega: '4GB incluidos, luego internet x Día Plus (50MBx$7,50)',
            credito: '$30 si los consumís te prestamos $ 30 hasta dos veces al mes',
            extra: 'Con tu plan 10GB y llamadas activando TEST DRIVE',
            beneficios: 'Destinos de América a precio local',
            price: '$21.000,00',
            planprice: '$469',
            link: '#',
          },
          { id: 6,
            speed: '2GB',
            name: 'Comunidad 2GB',
            habla: 'Libre a todos los Movistar y 200 min. a otras compañías',
            mensajea: 'Libre a cualquier compañía móvil',
            navega: '2GB incluidos, luego internet x Día Plus (50MBx$7,50)',
            credito: '$30 si los consumís te prestamos $ 30 hasta dos veces al mes',
            extra: 'Con tu plan 10GB y llamadas activando TEST DRIVE',
            beneficios: 'Destinos de América a precio local',
            price: '$21.000,00',
            planprice: '$299',
            link: '#',
            recomendado: true
          }
          ],
          sinfactura: [
        {
            id: 9,
            speed: 'Prepago Nacional',
            name: 'Elegí tu beneficio enviando Menú al 7000',
            habla: 'Elegí Hablar con un 50% de descuento a todos los Movistar x 15 días',
            mensajea: 'Un Número Free de SMS Movistar durante 30 días ',
            navega: 'Internet por día Plus',
            credito: '-',
            extra: '-',
            beneficios: 'Ahora tenés 50MB para Navegar 3G ó 4G hasta el final del día. Si te quedas sin megas antes de las 0 hs. Te renovamos otros 50 MB',
            price: '$21.000,00',
            planprice: 'Prepago Nacional',
            link: '#',
          },
          {
            id: 10,
            speed: 'Prepago',
            name: 'Elegí tu beneficio enviando Menú al 7000',
            habla: 'Elegí Hablar con un 50% de descuento a todos los Movistar x 15 días',
            mensajea: 'Elegí SMS $0,05 a cualquier compañía x 15 días. ',
            navega: 'Internet por día Plus',
            credito: '-',
            extra: '-',
            beneficios: 'Ahora tenés 50MB para Navegar 3G ó 4G hasta el final del día. Si te quedas sin megas antes de las 0 hs. Te renovamos otros 50 MB',
            price: '$21.000,00',
            planprice: 'Prepago',
            link: '#',
            recomendado: true
          },
          ],
          internetmovil: [
        {
            id: 13,
            speed: '20GB',
            name: '4G en Todo Plan 20GB',
            habla: 'Libre a todos los Movistar y 50 min. a otras compañías',
            mensajea: '-',
            navega: '20 GB 4G: hasta 10 veces más rápido',
            credito: '-',
            extra: '-',
            beneficios: '-',
            price: '$21.000,00',
            planprice: '$799',
            link: '#',
            recomendados: 'Enviar mails, Navegar páginas, Usar redes sociales, Mirar videos, Descargar, Música y juegos',
            aptos: 'Tablets, Modems, Wifi Móvil 4G',
            recomendado: true
          },
          {
            id: 14,
            speed: '10GB',
            name: '4G en Todo Plan 10GB',
            habla: 'Libre a todos los Movistar y 50 min. a otras compañías',
            mensajea: '-',
            navega: '10 GB 4G: hasta 10 veces más rápido',
            credito: '-',
            extra: '-',
            beneficios: '-',
            price: '$21.000,00',
            planprice: '$569',
            link: '#',
            recomendados: 'Enviar mails, Navegar páginas, Usar redes sociales, Mirar videos, Descargar, Música y juegos',
            aptos: 'Tablets, Modems, Wifi Móvil 4G'
          },
          
          ],
          }
    });

  },
};

module.exports = DataProducts;
