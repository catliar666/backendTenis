const adaptador = require('../database/adaptador');

// getPartidosPendientes, HECHO
// getPartidoFinalizados, HEHCO
// getPartidoPendiente, HECHO
// patchPartidoFinalizados,


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
        const partidos = await adaptador.getPartidosPendientes();
        const partidosConvertidos = Object.fromEntries(partidos);
        res.status(200).send({status: 'OK', data: partidosConvertidos})
    }catch(error) {
        res.status(error.status || 500).send({status:'FAILED', message: error.message})
    }
}

const getPartidosFinalizados = async (req, res) => {
    try{
        const partidos = await adaptador.getPartidoFinalizados();
        console.log(partidos)
        const partidosConvertidos = Object.fromEntries(partidos);
        res.status(200).send({status: 'OK', data: partidosConvertidos})
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
        const partidos = await adaptador.patchPartidoFinalizados(id, body)
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
    getPartidosPendientes,
    patchPartidos,
    getPartidoPendiente,
    getPartidosFinalizados
}