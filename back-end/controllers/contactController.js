const Contact = require('../models/contactModel');

exports.createContact = async (req, res) => {
  try {
    const contactId = await Contact.create(req.body);
    res.status(201).json({ id: contactId, ...req.body });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};