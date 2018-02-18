'use strict'

const mongoose = require('mongoose');

const anuncioSchema = mongoose.Schema({
	nombre :String,
	venta : Boolean,
	precio : Number,
	foto : String,
	tags : Array
})

anuncioSchema.statics.listar = function (filter, sort, limit, skip) {
    // definimos la query aplicando los filtro de nombre,rango de precios
    var query = Anuncio.find(filter);
    //Ordenamos
    query.sort(sort);
    //Definimos numero de resultados a mostrar
    query.limit(limit);
    //Saltamos los resultados que queramos
    query.skip(skip);
    //Ejecutamos la query
    return query.exec();
};

anuncioSchema.statics.listarTags = function() {
  return Anuncio.find().distinct('tags')
};

const Anuncio = mongoose.model('Anuncio', anuncioSchema)

module.exports = Anuncio