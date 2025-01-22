const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');
const { validateUser, handleValidationErrors } = require('../utils/validator');
const router = express.Router();


router.post('/register', validateUser, handleValidationErrors, registerUser);

router.post('/login', loginUser);

module.exports = router;
