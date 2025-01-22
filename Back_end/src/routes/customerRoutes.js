const express = require('express');
const { createCustomer, getCustomers,updateCustomer,deleteCustomer} = require('../controllers/customerController');
const authMiddleware = require('../middlewares/authMiddleware');
const { validateCustomer, handleValidationErrors } = require('../utils/validator');
const router = express.Router();


router.post('/', authMiddleware, validateCustomer, handleValidationErrors, createCustomer);
router.get('/', getCustomers);
router.put('/:id', updateCustomer);
router.delete('/:id', deleteCustomer);

module.exports = router;
