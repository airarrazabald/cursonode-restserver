const express = require('express');
const cors = require('cors');

class Server {
    
    constructor() {

        // al inicializar clase server se inicializa express
        this.app = express();

        // crea la propiedad del puerto 
        this.port = process.env.PORT;
 
        this.middlewares();
        
        this.routes();        
    }
     
    /**
     * middlawres: funciones que se le agregan a nuestro rest server cuando carga la app
     */
    middlewares() {

        // Añadiendo cors para restringir origenes de request 
        this.app.use(cors())

        // Directorio Publico
        this.app.use( express.static('public')); 
    }

    /**
     * Inicializo las rutas de nuestra REST API
     * nuestros propios endpoints
     */  
    routes() {
        this.app.get('/api',( req, res ) => {
            res.status(200).json({
                msg: "get API"
            });
        });

        this.app.put('/api',( req, res ) => {
            res.status(400).json({
                msg: "put API"
            });
        });

        this.app.post('/api',( req, res ) => {
            res.status(201).json({
                msg: "post API"
            });
        });

        this.app.delete('/api',( req, res ) => {
            res.json({
                msg: "delete API"
            });
        });

        this.app.patch('/api',( req, res ) => {
            res.json({
                msg: "patch API"
            });
        });
    }

    listen() {
        this.app.listen(this.port ,() => {
            console.log('APP esta escuchando por puerto:',process.env.PORT);
        });
    }
}

module.exports = Server;