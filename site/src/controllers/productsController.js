const productsController = {
    cart : (req, res) => {
        res.render('products/cart', { title: 'Carrito de compras' });
      },
    productDetail : (req, res) => {
        res.render('products/productDetail', { title: 'Detalle de producto' });
      }
    };

module.exports = productsController;



