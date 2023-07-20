const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const PORT = 5000;

// Configurar la carpeta 'public' como directorio de archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para mostrar el contenido del archivo index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Manejar la conexión de un nuevo usuario
io.on('connection', (socket) => {
    console.log('Usuario conectado');

    // Escuchar el evento inputChange y emitir reloadPage
    socket.on('inputChange', () => {
        console.log('Usuario escribió algo');
        io.emit('reloadPage'); // Notificar a todos los clientes que deben recargar la página
    });

    // Manejar la desconexión del usuario
    socket.on('disconnect', () => {
        console.log('Usuario desconectado');
    });
});

// Iniciar el servidor en el puerto especificado
server.listen(PORT, () => {
    console.log(`Servidor web abierto en http://localhost:${PORT}`);
});