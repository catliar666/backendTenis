const express = require('express');
const tenisController = require('../../controllers/tenisController')

const routes = express.Router()

routes.get('/', tenisController.getPartidos)
routes.get('/jugar', tenisController.getPartidoPendiente)
routes.get('/', tenisController.getPartido)
routes.get('/finalizados', tenisController.getPartidosFinalizados)
routes.get('/pendientes', tenisController.getPartidosPendientes)

// routes.post('/', tenisController.crearPartidoFinalizado)

routes.post('/:id', tenisController.patchPartidos)

module.exports = routes