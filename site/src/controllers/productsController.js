const productsController = {
    cart : (req, res) => {
        res.render('cart', { title: 'Carrito de compras' });
      },
    productDetail : (req, res) => {
        res.render('productDetail', { title: 'Detalle de producto' });
      }
    };

module.exports = productsController;



