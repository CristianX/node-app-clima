const lugar = require('./lugar/lugar');
const clima = require('./clima/clima')

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// console.log(argv.direccion);

// Imprimiendo datos
// lugar.getLugarLatLng(argv.direccion).then(console.log);
// Imprimiendo temperatura
// clima.getClima(40.750000, -74.000000).then(console.log).catch(console.log);

const getInfo = async(direccion) => {


    try {

        const coordenadas = await lugar.getLugarLatLng(direccion);
        const temperatura = await clima.getClima(coordenadas.lat, coordenadas.lng);
        return console.log(`El clima de ${ coordenadas.direccion } es de ${ temperatura }°C`);

    } catch (error) {
        return `No se puedo determinar el clima de ${ direccion }`;
    }




};


getInfo(argv.direccion).then(console.log).catch(console.log);