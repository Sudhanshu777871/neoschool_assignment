const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');
const authenticateToken = require('../middlewares/authMiddleware');

router.post('/create', authenticateToken, contactController.createContact);
router.patch('/edit', authenticateToken, contactController.editContact);
router.post('/search', authenticateToken, contactController.searchContacts);

module.exports = router;