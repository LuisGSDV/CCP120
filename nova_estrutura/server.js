var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.set('views', './views');

var server = http.createServer(app);
server.listen(80);

console.log("servidor rodando :)")

app.get('/', function (req, resp){
    resp.redirect("cadastro.html")
})

app.get('/cadastra',function (req, resp){
    var nome = req.query.nome;
    var email = req.query.email;
    var senha = req.query.senha;

resp.render('resp_cad', {nome, email, senha})
})

