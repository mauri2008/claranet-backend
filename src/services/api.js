const axios = require('axios').default;

const urlBase = process.env.URL_BASE_API;

exports.api = axios.create({

    baseURL:`${urlBase}`,
    timeout:1000
})

axios.interceptors.response.use(function (response){
    return response
}, function (error) {
    return Promise.reject(error);
})