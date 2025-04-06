const express = require('express');
const router = express.Router();
const { regUserForm } = require('../controllers/regControllers.js/regFormController');
const { authenticateToken } = require('../middlewares/authMiddleware');

router.post('/reg',authenticateToken, regUserForm);

module.exports = router;