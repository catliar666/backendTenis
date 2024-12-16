const express = require('express');
const app = express();
app.use(express.json())
const routes = require('./v1/routes/tenis_rutas')

const PORT = process.env.PORT || 1234;

app.use('/api/v1/partidos', routes)
app.listen(PORT, () => console.log(`Escuchando en el puerto ${PORT}`))