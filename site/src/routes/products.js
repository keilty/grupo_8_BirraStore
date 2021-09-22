const express = require('express');
const router = express.Router();

const {cart, productDetail} = require('../controllers/productsController');

/* GET products page. */
router.get('/cart', cart);
router.get('/productDetail', productDetail);

module.exports = router;