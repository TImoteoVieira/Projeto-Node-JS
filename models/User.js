//conexão com banco de dados opcional usando Sequelize

const Sequelize = require('sequelize');
const db = require ('./db');

const User = db.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

//Criar a tabela
User.sync();

module.exports = User;