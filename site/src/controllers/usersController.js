const usersController = {
    login : (req, res) => {
        res.render('users/login', { title: 'Login' });
      },
    register : (req, res) => {
        res.render('users/register', { title: 'Registro de usuario' });
      }
    };

module.exports = usersController;


