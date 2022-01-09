let mysql = require('mysql');
let express = require('express');
let app = express();
app.set('view engine', 'ejs');
let bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'TM',
    password: 'Sete7#SE',
    database: 'ProjetoWeb'
})

app.get('/curso', function(req, res){
    
    connection.query('select * from Curso;', function (error, resultado){
        res.render('./curso', {dados: resultado})
    })
});

app.post('/cursos/salvar', function(req, res){
    let dados = req.body

    connection.query('insert into Curso SET ?', dados, function(error, resultado){
        res.redirect('/curso')
    })
})

app.get('/editar/:id', function(req, res) {
    connection.query('select * from Curso where id =' + req.params.id, function(error, linha) {
        res.render('editar', {
            id: linha[0].ID,
            descricao: linha[0].DESCRICAO,
            carga_horaria: linha[0].CARGA_HORARIA,
        })
    })
})

app.post('/atualizar/:id', function(req, res) {
    let dados = req.body
    connection.query('update Curso set ? where id =' + req.params.id, dados, function (error){
        res.redirect("/curso")
    })
})

app.get('/curso/deletar/:id', function(req, res){
    var id = req.params.id;

    connection.query('delete from Curso where ID =' + id, function(error, resultado){
        res.redirect('/curso')
    })
})

app.listen(8010)
console.log('server up on -> 127.0.0.1:8010')
