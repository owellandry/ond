const fs = require('fs');
const crypto = require('crypto-js');

// Clave de cifrado (debe coincidir con la clave utilizada para cifrar las variables)
const encryptionKey = 'miClaveSecreta123'; // Reemplaza por tu clave segura

// Función para desencriptar un valor
function decryptValue(encryptedValue) {
    const bytes = crypto.AES.decrypt(encryptedValue, encryptionKey);
    return bytes.toString(crypto.enc.Utf8);
}

// Leer el contenido del archivo .ond
const pswContent = fs.readFileSync('.ond', 'utf8');

// Convertir el contenido en un objeto con las variables y sus valores cifrados
const variables = {};
pswContent.split('\n').forEach(line => {
    const [variable, encryptedValue] = line.split(' = ');
    variables[variable] = encryptedValue;
});

// Desencriptar los valores de las variables
const dbHost = decryptValue(variables.dbHost);
const dbUser = decryptValue(variables.dbUser);
const dbPassword = decryptValue(variables.dbPassword);
const dbDatabase = decryptValue(variables.dbDatabase);

// Usar las variables desencriptadas en la conexión a la base de datos
// (Aquí colocarías tu código para realizar la conexión a la base de datos)

console.log('Variables desencriptadas:');
console.log('dbHost:', dbHost);
console.log('dbUser:', dbUser);
console.log('dbPassword:', dbPassword);
console.log('dbDatabase:', dbDatabase);


const socket = io();

// Función para recargar la página después de 1 segundo
function reloadAfterDelay() {
    setTimeout(() => {
        window.location.reload();
    }, 1000);
}

// Emitir un evento para indicar que el usuario ha escrito algo
function handleInputChange() {
    socket.emit('inputChange');
}

// Escuchar el evento del servidor para recargar la página
socket.on('reloadPage', () => {
    reloadAfterDelay();
});

// Asignar el evento de cambio de entrada a los campos de texto
const inputFields = document.querySelectorAll('input[type="text"]');
inputFields.forEach(input => {
    input.addEventListener('input', handleInputChange);
});