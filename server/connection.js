const mysql = require('mysql');
const { decryptValue } = require('./decrypt');

// Variables de conexión a la base de datos (desencriptadas)
const dbHost = decryptValue('...'); // Desencripta el valor de dbHost
const dbUser = decryptValue('...'); // Desencripta el valor de dbUser
const dbPassword = decryptValue('...'); // Desencripta el valor de dbPassword
const dbDatabase = decryptValue('...'); // Desencripta el valor de dbDatabase

// Crear la conexión a la base de datos
const connection = mysql.createConnection({
  host: dbHost,
  user: dbUser,
  password: dbPassword,
  database: dbDatabase,
});

// Conectar a la base de datos
connection.connect((err) => {
  if (err) throw err;
  console.log('Conexión a la base de datos establecida.');
});

// Exportar la conexión para utilizarla en otros módulos
module.exports = connection;
