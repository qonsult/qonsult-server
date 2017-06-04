'use strict'

const tls = require('tls');
const dnode = require('dnode');

class QonsultServer {

    constructor() {

    }

    createServer() {

        this.server = tls.createServer({}, function (socket) {      
            console.log('Client connected');
                  

        });

        this.server.listen(8000, () => {
            console.log('Qonsult Server listening on port 8000');
        });

        return this.server;
    }
}

module.exports = QonsultServer;