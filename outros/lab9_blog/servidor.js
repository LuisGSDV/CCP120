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

var posts;


    var client = new MongoClient(uri, {
    useNewUrlParser: true,
});

    // Conecta ao BD e só então sobe o servidor
    client.connect(function(err) {
    if (err) {
        console.log("Erro ao conectar no BD: " + err);
    } else {
        console.log("Conectado ao MongoDB :)");
        var dbo = client.db("lab9_blog");
        posts = dbo.collection("posts");

        server.listen(80);
        console.log("servidor rodando :)");
    }
});


// Redireciona '/' para a página de projetos
app.get('/', function(req, resp) {
    resp.redirect('projects.html');
});

// Serve o blog com todos os posts do BD
app.get('/blog', function(req, resp) {
    posts.find({}).toArray(function(err, items) {
        if (err) {
            console.log(err);
            resp.render('blog', { listaPosts: [] });
        } else {
            resp.render('blog', { listaPosts: items });
        }
    });
});

// Cadastra um novo post no BD
app.post('/cadastrar_post', function(req, resp) {
    var data = {
        titulo: req.body.titulo,
        resumo: req.body.resumo,
        conteudo: req.body.conteudo
    };

    posts.insertOne(data, function(err) {
        if (err) {
            console.log(err);
            resp.render('resposta', { mensagem: "Erro ao cadastrar post!" });
        } else {
            resp.render('resposta', { mensagem: "Post cadastrado com sucesso!" });
        }
    });
});
