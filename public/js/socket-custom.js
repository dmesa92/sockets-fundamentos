var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log("Hemos perdido la conecxion con el servidor");
});

socket.emit('enviarMensaje', {
    usuario: 'Daniel',
    message: 'Hola mundo'
}, (resp) => {
    console.log('Respuesta del servidor ', resp);
});
//Escuchar información
socket.on('enviarMensaje', (message) => {
    console.log(message);
});