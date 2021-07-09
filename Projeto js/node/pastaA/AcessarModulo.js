const moduloA = require('../moduloA')
console.log(moduloA.ola)

const saudacao = require('saudacao')
console.log(saudacao.ola)

const c = require()

const http = require('http')
http.createServer((req, res) =>
{
    res.write('bom dia teste request')
    res.end()
}).listen(8080)