const axios = require('axios')
const url = "https://backendtenis-7f959-default-rtdb.europe-west1.firebasedatabase.app/"

const getPartidoPendiente = async () => {
    // const partidos = await axios.get(url + "partidosPendientes.json");
    // const data = partidos.data;
    // return Object.values(data)[0]; 
    const partidos = await axios.get(url + "partidosPendientes.json");
    var mapAux = new Map;
    for (const id in partidos.data) {
        const datos = partidos.data[id];
        if(!datos.finalizado){
            mapAux.set(id,datos)
        }
    }
    
    const firstKey = mapAux.keys().next().value; 
    const firstValue = mapAux.get(firstKey);    

    return { id: firstKey, ...firstValue }; 
};

const getPartidosPendientes = async () => {
    const partidos = await axios.get(url + "partidosPendientes.json");
    var mapAux = new Map;
    for (const id in partidos.data) {
        const datos = partidos.data[id];
        if(!datos.finalizado){
            mapAux.set(id,datos)
        }
    }
    
    return mapAux;
};

const getPartidoFinalizados = async () => {
    const partidos = await axios.get(url + "partidosPendientes.json");
    
    var mapAux = new Map;
    for (const id in partidos.data) {
        const datos = partidos.data[id];
        if(datos.finalizado){
            mapAux.set(id,datos)
        }
    }
    
    return mapAux;
}

const patchPartidoFinalizados = async (id ,partido) => {
    await axios.patch(url+"partidosPendientes/"+id+".json",partido)
}



module.exports = {
    getPartidosPendientes,
    getPartidoFinalizados,
    getPartidoPendiente,
    patchPartidoFinalizados,
    
}