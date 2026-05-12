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

try {

    var client = new MongoClient(uri, {
        useNewUrlParser: true,
    });

    // Conecta ao BD e só então sobe o servidor
    client.connect(function(err) {
        if (err) {
            console.log("Erro ao conectar no BD: " + err);
        } else {
            console.log("Conectado ao MongoDB :)");
            var dbo = client.db("lab10_carros");
            usuarios = dbo.collection("usuarios");
            carros = dbo.collection("carros");

            server.listen(80);
            console.log("servidor rodando :)");
        }
    });
} catch(err) {
    console.log("URI do MongoDB invalida: " + err.message);
}

// Redireciona '/' para a página de projetos
app.get('/', function(req, resp) {
    resp.redirect('projects.html');
});

// Lista todos os carros
app.get('/carros', function(req, resp) {
    carros.find({}).toArray(function(err, items) {
        if (err) {
            console.log(err);
            resp.render('carros', { listaCarros: [] });
        } else {
            resp.render('carros', { listaCarros: items });
        }
    });
});

// Cadastra um novo usuário
app.post('/cadastrar_usuario', function(req, resp) {
    var data = {
        db_nome: req.body.nome,
        db_login: req.body.login,
        db_senha: req.body.senha
    };

    usuarios.insertOne(data, function(err) {
        if (err) {
            console.log(err);
            resp.render('resposta', { mensagem: "Erro ao cadastrar usuário!" });
        } else {
            resp.render('resposta', { mensagem: "Usuário cadastrado com sucesso!" });
        }
    });
});

// Login de usuário
app.post('/logar_usuario', function(req, resp) {
    var data = { db_login: req.body.login, db_senha: req.body.senha };

    usuarios.find(data).toArray(function(err, items) {
        if (items.length == 0) {
            resp.render('resposta', { mensagem: "Usuário/senha não encontrado!" });
        } else if (err) {
            resp.render('resposta', { mensagem: "Erro ao logar!" });
        } else {
            resp.render('resposta', { mensagem: "Usuário logado com sucesso!" });
        }
    });
});

// Cadastra um novo carro
app.post('/cadastrar_carro', function(req, resp) {
    var data = {
        marca: req.body.marca,
        modelo: req.body.modelo,
        ano: req.body.ano,
        qtde_disponivel: parseInt(req.body.qtde_disponivel)
    };

    carros.insertOne(data, function(err) {
        if (err) {
            console.log(err);
            resp.render('resposta', { mensagem: "Erro ao cadastrar carro!" });
        } else {
            resp.render('resposta', { mensagem: "Carro cadastrado com sucesso!" });
        }
    });
});

// Atualiza um carro pelo modelo
app.post('/atualizar_carro', function(req, resp) {
    var filtro = { modelo: req.body.modelo };
    var novosDados = { $set: {
        marca: req.body.marca,
        ano: req.body.ano,
        qtde_disponivel: parseInt(req.body.qtde_disponivel)
    }};

    carros.updateOne(filtro, novosDados, function(err, result) {
        if (result.modifiedCount == 0) {
            resp.render('resposta', { mensagem: "Carro não encontrado!" });
        } else if (err) {
            resp.render('resposta', { mensagem: "Erro ao atualizar carro!" });
        } else {
            resp.render('resposta', { mensagem: "Carro atualizado com sucesso!" });
        }
    });
});

// Remove um carro pelo modelo
app.post('/remover_carro', function(req, resp) {
    var filtro = { modelo: req.body.modelo };

    carros.deleteOne(filtro, function(err, result) {
        if (result.deletedCount == 0) {
            resp.render('resposta', { mensagem: "Carro não encontrado!" });
        } else if (err) {
            resp.render('resposta', { mensagem: "Erro ao remover carro!" });
        } else {
            resp.render('resposta', { mensagem: "Carro removido com sucesso!" });
        }
    });
});

// Vende 1 unidade de um carro (decrementa qtde)
app.post('/vender_carro', function(req, resp) {
    var filtro = { modelo: req.body.modelo, qtde_disponivel: { $gt: 0 } };
    var update = { $inc: { qtde_disponivel: -1 } };

    carros.updateOne(filtro, update, function(err, result) {
        if (result.modifiedCount == 0) {
            resp.render('resposta', { mensagem: "Carro esgotado ou não encontrado!" });
        } else if (err) {
            resp.render('resposta', { mensagem: "Erro ao vender carro!" });
        } else {
            resp.render('resposta', { mensagem: "Venda realizada com sucesso!" });
        }
    });
});
