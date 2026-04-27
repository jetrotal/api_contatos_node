const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const middlewareErrors = require('./errors/errors');

dotenv.config();

mongoose.set('strictQuery', false);

const app = express();
app.use(express.json());


const contatoRouter = require('./routes/contatoRoutes');
app.use('/contatos', contatoRouter);
app.use(middlewareErrors);


mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro de conexão ao MongoDB:'));
db.once('open', () => {
  console.log('Conectado ao MongoDB Atlas!');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log(`servidor address ${MONGODB_URI} `)
});

module.exports = app; // Exporta o app para os testes