const Sequelize = require('sequelize');

const componentSequelize = new Sequelize("node_crud", 'root', '123', {
  dialect: 'mysql', host: '192.168.49.1'
});

componentSequelize.authenticate().then(function() {
  console.log("Conexão realizada!");
}).catch(function() {
  console.log("Erro na conexão!");
});

module.exports = componentSequelize;