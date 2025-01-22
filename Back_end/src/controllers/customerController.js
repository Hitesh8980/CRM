const Customer = require('../models/Customer');

// Create Customer
exports.createCustomer = async (req, res) => {
    const { name, email, phone, company } = req.body;

    if (!name || !email || !phone) {
        return res.status(400).json({ error: 'Name, email, and phone are required.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: 'Invalid email format.' });
    }

    try {
        const customer = new Customer({ name, email, phone, company, user: req.user.id });
        await customer.save();
        res.status(201).json(customer);
    } catch (error) {
        if (error.code === 11000) {
            // Handle duplicate email error
            res.status(400).json({ error: 'Email already exists.' });
        } else {
            res.status(400).json({ error: error.message });
        }
    }
};

// Get Customers with Search, Filtering, and Pagination
exports.getCustomers = async (req, res) => {
    const { search, company,phone, page = 1, limit = 10 } = req.query;

    const pageNumber = parseInt(page);
    const limitNumber = parseInt(limit);

    if (pageNumber < 1 || limitNumber < 1) {
        return res.status(400).json({ error: 'Page and limit must be positive integers.' });
    }

    const query = {};
    if (search) {
        query.$or = [
            { name: new RegExp(search, 'i') },
            { email: new RegExp(search, 'i') },
            { phone: new RegExp(search, 'i') },
        ];
    }
    if (company) query.company = company;
    if (phone) query.phone = phone;

    try {
        const skip = (pageNumber - 1) * limitNumber;
        const customers = await Customer.find(query).skip(skip).limit(limitNumber);
        const total = await Customer.countDocuments(query);

        res.status(200).json({
            customers,
            total,
            page: pageNumber,
            totalPages: Math.ceil(total / limitNumber),
        });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching customers.' });
    }
};
// Update Customer
exports.updateCustomer = async (req, res) => {
    const { id } = req.params;
    const { name, email, phone, company } = req.body;

    // Ensure that at least one field is provided
    if (!name && !email && !phone && !company) {
        return res.status(400).json({ error: 'At least one field (name, email, phone, company) is required to update.' });
    }

    try {
        const customer = await Customer.findByIdAndUpdate(id);

        if (!customer) {
            return res.status(404).json({ error: 'Customer not found.' });
        }

        // Update fields
        customer.name = name || customer.name;
        customer.email = email || customer.email;
        customer.phone = phone || customer.phone;
        customer.company = company || customer.company;

        await customer.save();
        res.status(200).json(customer);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while updating the customer.', message: error.message });
    }
};
// Delete Customer
exports.deleteCustomer = async (req, res) => {
    const { id } = req.params;

    try {
        const customer = await Customer.findByIdAndDelete(id); 

        if (!customer) {
            return res.status(404).json({ error: 'Customer not found.' });
        }

       
        res.status(200).json({ message: 'Customer deleted successfully.' });
    } catch (error) {
        res.status(500).json({ error: `An error occurred while deleting the customer.${error}` });
    }
};
