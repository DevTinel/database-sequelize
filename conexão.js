//trazendo o metodo que liga o banco com a aplicação 

	const { Sequelize } = require('sequelize');

//conectando com banco de dados 

	const sequelize = new Sequelize('nome do banco', 'root', 'chocolattra123', {
  		host: 'localhost',
 	     dialect: 'mysql',
	});


//teste para ver se o banco foi conectado

	try {
  		sequelize.authenticate();
  		console.log('conectado com sucesso');
   } catch (err) {
  		console.log('nao foi possivel conectar : ' + err);
	    }

//exportando 

module.exports = sequelize;