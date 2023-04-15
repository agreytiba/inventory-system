
const asyncHandler = require('express-async-handler');
const Customer = require('../models/customerModel');
// @desc  Register new customer
// @route POST /api/customers
// @access public

const registerCustomer = asyncHandler(async (req, res) => {
	const { customerName, customerEmail,customerPhone,customerBalance, location} = req.body;
	if (!customerName|| !customerEmail || !customerPhone || !location || !customerBalance ) {
		res.status(400);
		throw new Error('please add all fields');
	}

	//check if customer exists
	const customerExists = await Customer.findOne({customerEmail});
	if (customerExists) {
		res.status(400);
		throw new Error('customer already exists');
	}


	//  create customer
	const customer = await Customer.create({
        customerName,
        customerEmail,
        customerPhone,
        location,
		customerBalance,
     
	});
	if (customer) {
		res.status(201).json({
			_id: customer.id,
			customerName: customer.customerName,
            customerEmail: customer.customerEmail,
            customerPhone:customer.customerPhone,
			location: customer.location,
			customerBalance: customer.customerBalance,
		
		});
	} else {
		res.status(400);
		throw new Error('invalid customer data');
	}
});


// @desc  get customer data
// @route GET /api/customers
// @access private

const getCustomers = asyncHandler(async (req, res) => {
	const customers = await Customer.find();
    res.status(200).json({ customers });
});



module.exports = {
	registerCustomer,
	getCustomers
};
