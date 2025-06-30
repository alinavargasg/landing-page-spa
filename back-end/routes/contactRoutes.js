const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

router.post('/api/createContact', contactController.createContact);

module.exports = router;