const http = require('http');
// http req resp
const server = http.createServer((req, res) => {
  
  res.setHeader('Content-Type', 'application/json');

  // Array de tareas
  const tareas = [
    { id: 1, nombre: 'Cenar con mis padres', descripcion: 'Ir a un restaurante y compartir una cena en familia', completado: false },
    { id: 2, nombre: 'Pasear a mis perros', descripcion: 'Llevar a mis perros a dar un paseo en el parque', completado: true },
    { id: 3, nombre: 'Lavar la moto', descripcion: 'Limpiar a fondo la moto y pulir el exterior', completado: false }
  ];

  // Convertir el arreglo de tareas a JSON
  const tareasJson = JSON.stringify(tareas);

  // Enviar las respuesta con el arreglo de tareas en formato JSON
  res.end(tareasJson);
});

const puerto = 3000;

server.listen(puerto, () => {
  console.log(`Servidor iniciado en http://localhost:${puerto}`);
});