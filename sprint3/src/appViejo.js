// HAY QUE PARAMETRIZAR LAS RUTAS!!!

const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

app.get('/carrito', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'cart.html'));
});

app.get('/detalle-producto', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'productDetail.html'));
});

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'register.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'login.html'));
});


const port = 3030;

app.listen(port, () => console.log("Server listening at http://localhost:" + port));