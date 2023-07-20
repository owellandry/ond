const fs = require('fs');
const path = require('path');
const cryptoJS = require('crypto-js');

// Leer el archivo .psw y desencriptar las variables de entorno
const pswFilePath = path.join(__dirname, '..', '.psw');
const encryptedData = fs.readFileSync(pswFilePath, 'utf8');
const decryptedData = cryptoJS.AES.decrypt(encryptedData, 'password-secreta').toString(cryptoJS.enc.Utf8);
const envVariables = JSON.parse(decryptedData);

// Establecer la conexión con la base de datos usando las variables de entorno
const dbHost = envVariables.DB_HOST;
const dbUser = envVariables.DB_USER;
const dbPassword = envVariables.DB_PASSWORD;
const dbDatabase = envVariables.DB_DATABASE;

// Aquí puedes escribir el código para conectarte a la base de datos y realizar las operaciones CRUD.
