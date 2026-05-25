var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');

var app = express();
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', './views');

var server = http.createServer(app);

// Conexão com o MongoDB
var MongoClient = mongodb.MongoClient;
var uri = "mongodb+srv://luisgsdv:db1234@cluster0.dvqrmmu.mongodb.net/";

var usuarios;
var carros;

var client = new MongoClient(uri, {
    useNewUrlParser: true,
})

console.log("Conectado ao MongoDB :)");

// var dbo = client.db("nome_do_db");
// col1 = dbo.collection("col1");
// col2 = dbo.collection("col2");

// Porta
server.listen(80);
console.log("servidor rodando :)");