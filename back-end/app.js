// 1. Importar dependencias
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2/promise'); // Usamos la versión con Promesas
const Contact = require('./models/contactModel');

// 2. Configurar Express
const app = express();

app.use(cors({
  origin: 'http://localhost:4200',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['content-type']
})); // Permite peticiones desde el frontend

// 3. Middlewares esenciales
app.use(express.json());

// 4. Conexión a MySQL (ejemplo)
const pool = mysql.createPool({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'contactos_bd',
  waitForConnections: true,
  connectionLimit: 10
});

pool.getConnection()
  .then(conn => {
    console.log('Conexión a MySQL establecida');
    conn.release();
  })
  .catch(err => {
    console.error('Error de conexión a MySQL:', err.message);
  });


//5.
app.post('/api/createContact', async (req, res) => {
  try {
    const contactId = await Contact.create(req.body);
    res.status(201).json({ success: true, id: contactId });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

// 6. Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});