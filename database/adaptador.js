const axios = require('axios')

const urlPendientes = 'https://backendtenis-7f959-default-rtdb.europe-west1.firebasedatabase.app/partidosPendientes';
const urlCompletados = 'https://backendtenis-7f959-default-rtdb.europe-west1.firebasedatabase.app/partidosCompletados';

const getPartidos = async () => {
    const partidos = await axios.get(`${urlPendientes}.json`)
    // const map = new Map(Object.entries(partidos.data))
    // console.log(map.values().next().value)
    var mapbox = new Map;
    for(const id in partidos.data) {
        const datos = partidos.data[id];
            mapbox.set(id,datos)
    }
    console.log(mapbox);
    return mapbox;
}

const getPrimerPartido = async () => {
    const partidos = await axios.get(`${urlPendientes}.json`)
    // const map = new Map(Object.entries(partidos.data))
    // console.log(map.values().next().value)
    const data = partidos.data
    return Object.values[data][0];
}

const getPartidosPendientes = async () => {
    const partidos = await axios.get(`${urlPendientes}.json`)
    // const map = new Map(Object.entries(partidos.data))
    // console.log(map.values().next().value)
    var mapbox = new Map;
    for(const id in partidos.data) {
        const datos = partidos.data[id];
        if (!datos.finalizado) {
            mapbox.set(id,datos)
        }
    }
    console.log(mapbox);
    return mapbox;
}

const getPartidoPendiente = async () => {
    const partidos = await axios.get(`${urlPendientes}.json`)
    // const map = new Map(Object.entries(partidos.data))
    // console.log(map.values().next().value)
    var mapbox = new Map;
    for(const id in partidos.data) {
        const datos = partidos.data[id];
        if (datos.finalizado) {
            mapbox.set(id,datos)
        }
    }
    const firstKey = mapbox.keys().next().value;
    const firstValue = mapbox.get(firstKey);
    return {id: firstKey, ...firstValue};
}

const getPartidosFinalizados = async () => {
    const partidos = await axios.get(`${urlPendientes}.json`)
    // const map = new Map(Object.entries(partidos.data))
    // console.log(map.values().next().value)
    var mapbox = new Map;
    for(const id in partidos.data) {
        const datos = partidos.data[id];
        if (datos.finalizado) {
            mapbox.set(id,datos)
        }
    }
    console.log(mapbox);
    return mapbox;
}

const patchPartidosFinalizados = async (id, partido) => {
    axios.patch(urlPendientes + "/" + id + ".json", partido)
}

// const borrarPartidoPendiente = async (id) => {
//     await axios.delete(`${urlPendientes}/${id}.json`)
// }

// const crearPartidoFinalizado = async (partido) => {
//     await borrarPartidoPendiente(partido.keys().next().value)
//     const response = await axios.post(`${urlCompletados}.json`, partido.values().next().value);
//     console.log(response);

// }



module.exports = {
    getPartidoPendiente,
    getPrimerPartido,
    getPartidos,
    getPartidosPendientes,
    getPartidosFinalizados,
    patchPartidosFinalizados,
}