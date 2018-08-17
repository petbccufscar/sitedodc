var keystone = require('keystone');
var express = require('express');

var router = express.Router();

// sub routes
var eventos = require('./eventos');
var noticias = require('./noticias');

router.use('/eventos', eventos);
router.use('/noticias', noticias);

module.exports = router;
