function calculateDistance(pointA, pointB) {
    const R = 6371; // Raio da Terra em quilômetros
    const lat1 = pointA.lat * Math.PI / 180; // Converte graus em radianos
    const lat2 = pointB.lat * Math.PI / 180;
    const deltaLat = (pointB.lat - pointA.lat) * Math.PI / 180;
    const deltaLon = (pointB.lon - pointA.lon) * Math.PI / 180;

    const a = Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
              Math.cos(lat1) * Math.cos(lat2) *
              Math.sin(deltaLon / 2) * Math.sin(deltaLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distância em quilômetros

    return distance;
}

// Exemplo de uso:
const pointA = { lat: 40.7128, lon: -74.0060 }; // Nova York
const pointB = { lat: 34.0522, lon: -118.2437 }; // Los Angeles

console.log(calculateDistance(pointA, pointB));