const axios = require('axios').default;

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// console.log(argv.direccion);


// Preparando direccion, encodeURI convierte a un url seguro
const encodeUrl = encodeURI(argv.direccion);
console.log(encodeUrl);

// Creando intancia
const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodeUrl }`,
    headers: { 'x-rapidapi-key': '730ba8dea0mshe34690080ea4082p100360jsn76e333976ea1' } // Header y api key
});


instance.get().then(resp => {
    console.log(resp.data.Results[0]);
}).catch(err => {
    console.log('Error: ', err);
})