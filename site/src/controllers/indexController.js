const indexController = {
    index : (req, res) => {
        res.render('index', { title: 'Birra Store Home' });
      }
    };

module.exports = indexController;