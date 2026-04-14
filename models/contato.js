const mongoose = require('mongoose');


const contatoSchema = new mongoose.Schema({
  // mongo já vem com chave primaria chamada _id, entao nao precisamos criar um campo id
  nome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  telefone: {
    type: String,
    required: true,
  },
  endereco: {
    type: String,
    required: true,
  },
  foto: {
    type: String,
    required: false,
  },
});


const Contato = mongoose.model('Contato', contatoSchema);


module.exports = Contato;
