// server.js
const express = require('express');
const mysql = require('mysql2/promise');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Configuración de la conexión a MySQL
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'contactos_bd',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Endpoint para guardar contactos
app.post('/api/createContact', async (req, res) => {
  try {
    const { nombre, email, mensaje } = req.body;
    
    const [result] = await pool.query(
      'INSERT INTO contactos (nombre, email, mensaje) VALUES (?, ?, ?)',
      [nombre, email, mensaje]
    );
    
    res.status(201).json({ success: true, id: result.insertId });
  } catch (error) {
    console.error('Error al guardar contacto:', error);
    res.status(500).json({ success: false, error: 'Error al procesar la solicitud' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});