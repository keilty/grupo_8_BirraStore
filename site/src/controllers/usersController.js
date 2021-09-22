const usersController = {
    login : (req, res) => {
        res.render('login', { title: 'Login' });
      },
    register : (req, res) => {
        res.render('register', { title: 'Registro de usuario' });
      }
    };

module.exports = usersController;
