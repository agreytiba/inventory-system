
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


// @desc update customer
// @route PUT /api/customers/:id
// @access private
const updateCustomer =asyncHandler( async(req,res)=>{
    const customer = await Customer.findById(req.params.id)
    if (!customer) {
         res.status(400)
         throw new Error ('customer not found')
    }
    // const user  = await User.findById(req.user.id)
   
    // // check for user
    // if (!user) {
    //     res.status(401)
    //     throw new Error('User not found')
    // }

    // //make sure the  logged in user matche r the goal user
    // if (goal.user.toString() !== user.id) {
    //     res.status(401)
    //     throw new Error('user not authorized')
    // }

    const updatedCustomer =await Customer.findByIdAndUpdate(req.params.id, req.body,{new: true,})
    res.status(200).json(updatedCustomer)
})
// @desc  Delete customer
// @route DELETE /api/customers/:id
// @access private
const deleteCustomer = asyncHandler( async(req,res)=>{
    const customer = await Customer.findByIdAndDelete(req.params.id)

   
     res.status(200).json("successful delete")
    // const user  = await User.findById(req.user.id)
   
    // // check for user
    // if (!user) {
    //     res.status(401)
    //     throw new Error('User not found')
    // }

    // //make sure the  logged in user matche r the customer user
    // if (goal.user.toString() !== user.id) {
    //     res.status(401)
    //     throw new Error('user not authorized')
    // }
	
		 res.status(200).json("successful delete")
	
   
})

module.exports = {
	registerCustomer,
	getCustomers,
	updateCustomer,
	deleteCustomer
};
