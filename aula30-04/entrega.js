const haversine = require('./harvesine');
let partida = {name: "Midway Mall", lat: -5.8026, lon: -35.2077};
const coordenadas = [
    { name: "Arena das Dunas", lat: -5.8238, lon: -35.2123 },
    { name: "Praia de Ponta Negra", lat: -5.8833, lon: -35.1775 },
    { name: "Parque das Dunas", lat: -5.8122, lon: -35.2028 },
    { name: "Morro do Careca", lat: -5.8853, lon: -35.1658 },
    { name: "Forte dos Reis Magos", lat: -5.7689, lon: -35.2041 },
    { name: "Praia dos Artistas", lat: -5.7793, lon: -35.1907 },
    { name: "Teatro Riachuelo", lat: -5.8005, lon: -35.2074 },
    { name: "Museu Câmara Cascudo", lat: -5.7904, lon: -35.1993 },
    { name: "Aquário Natal", lat: -5.7784, lon: -35.0879 }
];
let ordemEntrega = [];
function entregas(list){
let distancia;
    for(let i=0; i<list.length; i++){
        distancia = haversine(partida,list[i])
        ordemEntrega.push({"distancia":distancia, "entrega": list[i]});
    } 
}
entregas(coordenadas);
ordemEntrega.sort((a, b) => a.distancia - b.distancia);
ordemEntrega.forEach(entrega=>{
    console.log(entrega)
});