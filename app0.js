//var cors = require('cors')
let mysql = require('mysql');
let express = require('express');
let app = express();
app.set('view engine', 'ejs');
//const sequelize = require('./models/db');
//const User = require('./models/User');
//const db = require ('./models/db');
//app.use(cors())
//app.use(express.json());

// -> conexão Node sem passar pelo Sequelize
app.get('/curso', function(req, res){
    
    let connection = mysql.createConnection({
        host: 'localhost',
        user: 'TM',
        password: 'Sete7#SE',
        database: 'ProjetoWeb'
    })
    
    connection.query('select * from Curso;', function (error, resultado){
        res.render('./curso', {dados: resultado})
        //console.log({resultado})
        //res.send(resultado)
    })
});
app.listen(8010)
console.log('server up on -> 127.0.0.1:8010')









// app.get('/', async (req, res) => {
//     res.send('Página Inicial do servidor')
// })
// app.post('/cadastrar', async function(req, res){
//     console.log(req.body);
//     return res.json(req.body)
// }); 
// app.listen(8010, () =>{
//     console.log('server up on -> 127.0.0.1:8010')
// });

    //tratativa de erro
    // connection.connect(function(err){
    //     if (err) {
    //         console.error('error connecting: ' +err.stack);
    //         return 
    //     }
    //     console.log('connected as id: '+ connection.threadId);
    // })