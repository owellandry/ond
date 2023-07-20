const fs = require('fs');
const path = require('path');
const cryptoJS = require('crypto-js');

// Leer el archivo .ond y desencriptar las variables de entorno
const pswFilePath = path.join(__dirname, '..', '.ond');
const encryptedData = fs.readFileSync(pswFilePath, 'utf8');
const decryptedData = cryptoJS.AES.decrypt(encryptedData, 'password-secreta').toString(cryptoJS.enc.Utf8);
const envVariables = JSON.parse(decryptedData);

// Establecer la conexión con la base de datos usando las variables de entorno
const dbHost = envVariables.DB_HOST;
const dbUser = envVariables.DB_USER;
const dbPassword = envVariables.DB_PASSWORD;
const dbDatabase = envVariables.DB_DATABASE;
