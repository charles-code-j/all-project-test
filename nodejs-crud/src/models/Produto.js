const Sequelize = require('sequelize');
const database = require('../db_connection_mysql');

const Produto = database.define('produto', {

ID: {
    type:Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
},
NOME: {
    type: Sequelize.STRING,
    allowNull: true
},
DATA: {
    type: Sequelize.DATE,
    allowNull: true
}
});

Produto.sync();

module.exports = Produto;