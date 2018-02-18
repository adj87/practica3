var express = require('express');
var router = express.Router();

const Anuncio = require('../models/Anuncio');

/* GET home page. */
router.get('/', function(req, res, next) {
  Anuncio.find().exec().then(docs => {
	//renderizamos index con parametros
  	res.render('index', { title: 'Nodepop', subtitle : 'El mejor portal para comprar y vender', anuncios : docs});
  }).catch(err => {
    next(err);
    return;
  });
});


module.exports = router;
