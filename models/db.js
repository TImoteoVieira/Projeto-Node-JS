const Sequelize = require('sequelize')

const sequelize = new Sequelize("ProjetoWeb", "TM", "Sete7#SE", {
    host: "localhost",
    dialect: "mysql"
});

//-> teste de conexão com o banco de dados
sequelize.authenticate()
.then(function(){
    console.log("autenticado com sucesso")
}).catch(function(){
    console.log("Erro na conexão com o DB")
});

module.exports = sequelize;