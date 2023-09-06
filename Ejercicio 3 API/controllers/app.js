const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Conectar a la base de datos MongoDB
mongoose.connect('mongodb://localhost/tu_base_de_datos', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conexión a MongoDB establecida');
  })
  .catch((err) => {
    console.error('Error al conectar a MongoDB:', err);
  });

// Configurar middlewares
app.use(bodyParser.json());

// Importar y usar las rutas de artículos y tickets
const articleRoutes = require('./routes/articleRoutes');
const ticketRoutes = require('./routes/ticketRoutes');

app.use('/api/articles', articleRoutes);
app.use('/api/tickets', ticketRoutes);

// Puerto de escucha
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor API escuchando en el puerto ${port}`);
});
