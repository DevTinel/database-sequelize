//rota

app.get('/', async (req, res) => {
  const users = await User.findAll({ raw: true });

  console.log(users);
  res.render('home', { users: users });
});
