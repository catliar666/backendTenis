const adaptador = require('../database/adaptador');

const getPartidos = async (req, res) => {
try{
    const partidos = await adaptador.getPartidos();
    res.status(200).send({status: 'OK', data: partidos})
}catch(error) {
    res.status(error.status || 500).send({status:'FAILED', message: error.message})
}
}


const getPartido = async (req, res) => {
    try{
        const partido = await adaptador.getPrimerPartido();
        res.status(200).send({status: 'OK', data: partido})
    }catch(error) {
        res.status(error.status || 500).send({status:'FAILED', message: error.message})
    }
}

const getPartidoPendiente = async (req, res) => {
    try{
        const partido = await adaptador.getPartidoPendiente();
        res.status(200).send({status: 'OK', data: partido})
    }catch(error) {
        res.status(error.status || 500).send({status:'FAILED', message: error.message})
    }
}

const getPartidosPendientes = async (req, res) => {
    try{
        const partido = await adaptador.getPartidosPendientes();
        res.status(200).send({status: 'OK', data: partido})
    }catch(error) {
        res.status(error.status || 500).send({status:'FAILED', message: error.message})
    }
}

const getPartidosFinalizados = async (req, res) => {
    try{
        const partidos = await adaptador.getPartidosFinalizados();
        res.status(200).send({status: 'OK', data: partidos})
    }catch(error) {
        res.status(error.status || 500).send({status:'FAILED', message: error.message})
    }
}

const patchPartidos = async (req, res) => {
    const {
        body,
        params: { id },
      } = req;
    try{
        const partidos = await adaptador.patchPartidosFinalizados(id, body)
        res.status(200).send({status: 'OK', data: partidos})
    }catch(error) {
        res.status(error.status || 500).send({status:'FAILED', message: error.message})
    }
}

// const crearPartidoFinalizado = async (req, res) => {
//     const partido = req.body;
//     if (!partido) res.status(400).send({status:"FAILED", message:"NO DATA"})
//     const mapa = new Map(Object.entries(partido))
//     try{
//         const partidoFinalizado = await adaptador.crearPartidoFinalizado(mapa);
//         res.status(200).send({status: 'OK', data: partidoFinalizado})
//     }catch(error) {
//         res.status(error.status || 500).send({status:'FAILED', message: error.message})
//     }
// }

module.exports = {
    getPartidos,
    getPartidosPendientes,
    getPartido,
    patchPartidos,
    getPartidoPendiente,
    getPartidosFinalizados

}