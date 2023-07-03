const Sequelize = require('sequelize');

const componentSequelize = new Sequelize("node_crud", 'root', '1234', {
  dialect: 'mysql', host: 'mysql-service'
});

componentSequelize.authenticate().then(function() {
  console.log("Conexão realizada!");d
}).catch(function() {
  console.log("Erro na conexão!");
});

module.exports = componentSequelize;