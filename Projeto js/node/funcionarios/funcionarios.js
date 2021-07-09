const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
//objeto do client para fazer requisiçoes
const axios = require('axios')



axios.get(url).then(Response =>{
    const funcionarios = Response.data
})

cons