const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'contactos_bd',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

class Contact {
  static async create(contactData) {
    if (!contactData?.nombre || !contactData?.email) {
      throw new Error('Nombre y email son obligatorios');
    }

    const [result] = await pool.execute(
      'INSERT INTO contactos (nombre, email, mensaje) VALUES (?, ?, ?)',
      [contactData.nombre, contactData.email, contactData.mensaje || null]
    );
    return result.insertId;
  }

  static async getById(id) {
    const [rows] = await pool.execute('SELECT * FROM contactos WHERE id = ?', [id]);
    return rows[0] || null;
  }

  static async getAll() {
    const [rows] = await pool.execute('SELECT * FROM contactos');
    return rows;
  }
}

module.exports = Contact;