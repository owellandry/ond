const crypto = require('crypto-js');

// Clave de cifrado (debe coincidir con la clave utilizada para cifrar las variables)
const encryptionKey = 'miClaveSecreta123'; // Reemplaza por tu clave segura

// Función para desencriptar un valor
function decryptValue(encryptedValue) {
  const bytes = crypto.AES.decrypt(encryptedValue, encryptionKey);
  return bytes.toString(crypto.enc.Utf8);
}

module.exports = { decryptValue };
