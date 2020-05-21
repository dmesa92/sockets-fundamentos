const { io } = require('../server');


io.on("connection", (client) => {
    console.log("usuario coenctado");

    client.on('disconnect', () => {
        console.log("Usuario desconectado");
    });

    //Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);
        client.broadcast.emit('enviarMensaje', data);
        // if (mensaje.usuario) {
        //     callback({
        //         resp: "TODO SALIO BIEN"
        //     });

        // } else {
        //     callback({
        //         resp: "TODO SALIO MAL"
        //     });

        // }
    })

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        message: 'Welcome!'
    });

});

module.exports = io;