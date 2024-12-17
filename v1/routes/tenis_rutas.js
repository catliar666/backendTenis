const express = require('express');
const tenisController = require('../../controllers/tenisController')

const routes = express.Router()
routes.get('/infoTorneo', tenisController.getInfoTorneo)
routes.get('/jugar', tenisController.getPartidoPendiente)
routes.get('/finalizados', tenisController.getPartidosFinalizados)
routes.get('/pendientes', tenisController.getPartidosPendientes)
routes.patch('/:id', tenisController.patchPartidos)

module.exports = routes