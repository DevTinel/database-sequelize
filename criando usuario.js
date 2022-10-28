//recebendo os dados do frontend

	app.post('/users/create', async (req, res) => { 

//colocando os dados recebedos em variaveis

  const name = req.body.name;
  const occupation = req.body.occupation;
  let newsletter = req.body.newsletter;

//verificando se o checkbox foi clicado 

  if (newsletter === 'on') {
    newsletter = true;
  } else {
    newsletter = false;
  }

//criando a tabela user com o metodo create
  
	await User.create({
    	name,
    	occupation,
    	newsletter,
  	});

//redirecionando para home depois da  criação

	  res.redirect('/');
});