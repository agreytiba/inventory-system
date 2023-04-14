const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
// @desc  Register new user
// @route POST /api/users
// @access public

const registerUser = asyncHandler(async (req, res) => {
	const { name, email, password, position, workerId } = req.body;
	if (!name || !email || !password || !workerId || !position) {
		res.status(400);
		throw new Error('please add all fields');
	}

	//check if user exists
	const userExists = await User.findOne({ email });
	if (userExists) {
		res.status(400);
		throw new Error('user already exists');
	}
	// Hash password
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(password, salt);

	//  create user
	const user = await User.create({
		name,
		email,
		position,
		workerId,
		password: hashedPassword
	});
	if (user) {
		res.status(201).json({
			_id: user.id,
			name: user.name,
			email: user.email,
			position: user.position,
			workerId: user.workerId,
			token: generateToken(user._id)
		});
	} else {
		res.status(400);
		throw new Error('invalid user data');
	}
});

// @desc  authenticate a user
// @route POST /api/users/login
// @access public

const loginUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body;

	// check for user by email
	const user = await User.findOne({ email });

	if (user && (await bcrypt.compare(password, user.password))) {
		res.json({
			id: user.id,
			name: user.name,
            email: user.email,
            position: user.position,
			workerId: user.workerId,
			token: generateToken(user._id)
		});
	} else {
		res.status(400);
		throw new Error('invalid credentials');
	}
});

// @desc  get user data
// @route GET /api/users/me
// @access private

const getMe = asyncHandler(async (req, res) => {
	const { _id, name, email } = await User.findById(req.user.id);

	res.status(200).json({
		id: _id,
		name,
        email,
        position,
		workerId
	});
});

// Generate JWT
const generateToken = (id) => {
	return jwt.sign({ id }, process.env.JWT_SECRET, {
		expiresIn: '30d'
	});
};

module.exports = {
	registerUser,
	getMe,
	loginUser
};
