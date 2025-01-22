const { check, validationResult } = require('express-validator');

// User registration validation
const validateUser = [
    check('name', 'Name is required').notEmpty(),
    check('email', 'Invalid email').isEmail(),
    check('password', 'Password must be at least 6 characters').isLength({ min: 6 }),
];

// Customer validation
const validateCustomer = [
    check('name', 'Name is required').notEmpty(),
    check('email', 'Invalid email').isEmail(),
    check('phone', 'Phone number is required').notEmpty(),
    check('phone', 'Phone number must be 10 digits').isLength({ min: 10, max: 10 }),
];

const handleValidationErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

module.exports = { validateUser, validateCustomer, handleValidationErrors };
