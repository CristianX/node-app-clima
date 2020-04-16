const axios = require('axios').default;



const getClima = async(lat, lng) => {
    // Llamando la data
    // Siempre hay que mandar https
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=d7648adec49a71a183b63dd1b644f55f&units=metric`);

    // Retornando temperatura
    return resp.data.main.temp;

}

module.exports = {
    getClima
}