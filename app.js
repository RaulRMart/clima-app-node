//const { require } = require('yargs');


const lugar = require('./lugar/lugar');
//const { require } = require('yargs');
const clima = require('./clima/clima');


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

//console.log(argv.direccion);

//lugar.getLugarLatLng(argv.direccion).then(console.log);
clima.getClima(40.750000, -74.0000)
    .then(console.log).catch(console.log);

const getInfo = async(direccion) => {

    try {
        const coordenadas = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coordenadas.lat, coordenadas.lng);
        return `El clima de ${coords.direccion} es de ${temp}.`
    } catch (e) {
        return `No se pudo comprobar el clima de ${ direccion }`
    }
    //Salida

}

getInfo(argv.direccion)
    .then(console.log).catch(console.log);