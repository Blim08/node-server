const http = require('http');

const host = "localhost"; 
const port = 8080

const tareas = [
  { id: 1, description: "lavar", state: false},
  { id: 2, description: "cocinar", state: false },
  { id: 3, description: "planchar", state: false },
  { id: 4, description: "lavar platos", state: false },
  { id: 5, description: "barrer", state: false }

];

const server = http.createServer((req, res) =>{   
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.write(JSON.stringify(tareas))
  res.end();
});

server.listen(port, host, () => {
  console.log(`servidor funcionando en http://${host}:${port}`);
});
