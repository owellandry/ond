const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./connection');

const app = express();
app.use(bodyParser.json());

// Endpoint para obtener la información de la tabla
app.get('/informacion', (req, res) => {
  const query = 'SELECT * FROM informacion';
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error al obtener la información:', err);
      res.status(500).json({ error: 'Error al obtener la información' });
    } else {
      res.json(results);
    }
  });
});

// Endpoint para agregar información a la tabla
app.post('/informacion', (req, res) => {
  const { nombre } = req.body;
  const query = 'INSERT INTO informacion (nombre) VALUES (?)';
  connection.query(query, [nombre], (err, results) => {
    if (err) {
      console.error('Error al agregar información:', err);
      res.status(500).json({ error: 'Error al agregar información' });
    } else {
      res.json({ message: 'Información agregada correctamente' });
    }
  });
});

// Endpoint para actualizar información en la tabla
app.put('/informacion/:id', (req, res) => {
  const { id } = req.params;
  const { nombre } = req.body;
  const query = 'UPDATE informacion SET nombre = ? WHERE id = ?';
  connection.query(query, [nombre, id], (err, results) => {
    if (err) {
      console.error('Error al actualizar información:', err);
      res.status(500).json({ error: 'Error al actualizar información' });
    } else {
      res.json({ message: 'Información actualizada correctamente' });
    }
  });
});

// Endpoint para eliminar información de la tabla
app.delete('/informacion/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM informacion WHERE id = ?';
  connection.query(query, [id], (err, results) => {
    if (err) {
      console.error('Error al eliminar información:', err);
      res.status(500).json({ error: 'Error al eliminar información' });
    } else {
      res.json({ message: 'Información eliminada correctamente' });
    }
  });
});

// Iniciar el servidor en el puerto 5000
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
