
// para pegar o tipo do dado
	
	const { DataTypes } = require('sequelize'); 

//instanciando o banco de dados

	const db = require('../db/conn');


//definindo o modelo da tabela user

	const User = db.define('User', {
  		name: {				//nome da coluna
    		type: DataTypes.STRING, // tipo do dado
    		allowNull: false,	   // nao aceita campo nulo
  	  },
  occupation: { 			//nome da coluna
    type: DataTypes.STRING,  // tipo do dado
    required: true,		   // campo obrigatório 
  },
  newsletter: {				 // nome da coluna
    type: DataTypes.BOOLEAN,		 // tipo do dado
  },
});


//exportando o model para ser usado em outro arquivo

	module.exports = User;
