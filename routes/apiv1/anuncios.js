'use strict'

const express = require('express');
const router = express.Router();

const Anuncio = require('../../models/Anuncio');

router.get('/', async (req, res, next) => { 

  try {
    //Recibimos todos los parametros de la query
    var tag = req.query.tag;
    var venta = req.query.venta;
    var nombre = req.query.nombre;
    var precio = req.query.precio || null;
    var skip = parseInt(req.query.start) || null;
    var limit = parseInt(req.query.limit) || null;
    var sort = req.query.sort || null;

    //creamos filter que estaraá compuesto de nombre,venta,precios y tags
    var filter = {};

    //Validamos nombre
    if (typeof nombre !== 'undefined') {
        filter.nombre = new RegExp('^'+ nombre,'i');
    }

    //Validamos parámetro venta
    if (typeof venta !== 'undefined') {
        filter.venta = venta;
    }

    //Validamos parámetro precio
    if (precio !== null) {

        var guionPosicion = precio.search("-"); 
        //Esta condicion es para ver si el rango esta comprendido entre dos valores
        if(guionPosicion!=0 && (guionPosicion!=precio.length-1) ) {
          var precioMin = precio.split("-")[0]
          var precioMax = precio.split("-")[1]
          filter.precio = { '$gte': parseInt(precioMin), '$lte': parseInt(precioMax) }
        }

        //Esta condicion verifica si es el rango de precio es menor que un numero
        else if(guionPosicion==0){
          filter.precio = { '$lte': parseInt(precio.split("-")[1]) };
        }

        //Esta condicion verifica si es el rango de precio es mayor que un numero
        else{
          filter.precio = { '$gte': parseInt(precio.split("-")[0]) };
        }
    }

    //Validamos parámetro tag
    if (typeof tag !== 'undefined') {
        filter.tags = { '$all': [tag] };
    }

    const docs = await Anuncio.listar(filter, sort, limit, skip);    
    res.json(docs); 

  } catch(err) {
    next(err);
    return;
  }  
});


router.get('/tags', async (req, res, next) =>{
  
  try{
    const tags = await Anuncio.listarTags();
    res.json(tags)
  }catch(err) {
    next(err);
    return;
  }

})


router.post('/', (req,res,next) => {
	
	//guardamos datos en variable data
	const data = req.body;

	//instanciamos un objeto de Anuncio
	const nuevoAnuncio = new Anuncio(data);

	//guardamos en la db
  nuevoAnuncio.save((err, anuncioGuardado) => {
    if (err) {
     		next(err);
     		return;
    }
    res.json({ success: true, result: anuncioGuardado });
  })
    
})

module.exports = router