const axios = require('axios').default;

const getLugarLatLng = async(dir) => {

    // Preparando direccion, encodeURI convierte a un url seguro
    const encodeUrl = encodeURI(dir);
    // console.log(encodeUrl);

    // Creando intancia
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodeUrl }`,
        headers: { 'x-rapidapi-key': '730ba8dea0mshe34690080ea4082p100360jsn76e333976ea1' } // Header y api key
    });


    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${ dir }`);
    }

    // Separando datos
    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}