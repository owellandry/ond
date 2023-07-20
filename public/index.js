const fs = require('fs');
const crypto = require('crypto-js');

// Clave de cifrado (debe coincidir con la clave utilizada para cifrar las variables)
const encryptionKey = 'miClaveSecreta123'; // Reemplaza por tu clave segura

// Función para desencriptar un valor
function decryptValue(encryptedValue) {
    const bytes = crypto.AES.decrypt(encryptedValue, encryptionKey);
    return bytes.toString(crypto.enc.Utf8);
}

// Leer el contenido del archivo .psw
const pswContent = fs.readFileSync('.psw', 'utf8');

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

// Emitir un evento para indicar que el usuario se conectó a la página
socket.on('connect', () => {
    console.log('Usuario conectado');
});

// Emitir un evento para indicar que el usuario se desconectó de la página
socket.on('disconnect', () => {
    console.log('Usuario desconectado');
});