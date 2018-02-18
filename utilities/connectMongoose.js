'use strict'

const mongoose = require('mongoose');
const conn = mongoose.connection;

conn.on('error', err => {
  console.log('Error de conexión', err);
  process.exit(1);
});

conn.once('open', () => {
  console.log('Connected to mongodb on', mongoose.connection.name);
});

mongoose.connect('mongodb://localhost/nodepop');