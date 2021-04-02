// Importaciones propias de node 

// Importaciones de terceros
require('dotenv').config();

// Importaciones personalizadas
const Server = require('./models/server');


const server =  new Server();

server.listen();