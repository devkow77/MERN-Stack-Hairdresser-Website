// USER VALIDATIONS

export const createClient = {
	name: {
		isString: {
			errorMessage: 'Name must be a string',
		},
		notEmpty: {
			errorMessage: 'Name must not be empty',
		},
	},
	surname: {
		isString: {
			errorMessage: 'Surname must be a string',
		},
		notEmpty: {
			errorMessage: 'Surname must not be empty',
		},
	},
	email: {
		isEmail: {
			errorMessage: 'Email must be a valid email',
		},
		notEmpty: {
			errorMessage: 'Email must not be empty',
		},
	},
	phoneNumber: {
		isString: {
			errorMessage: 'Phone number must be a string',
		},
		isLength: {
			options: {
				min: 9,
				max: 9,
			},
			errorMessage: 'Phone number must contain exactly 9 digits',
		},
		notEmpty: {
			errorMessage: 'Phone number must not be empty',
		},
	},
	password: {
		isString: {
			errorMessage: 'Password must be a string',
		},
		isLength: {
			options: {
				min: 6,
				max: 24,
			},
			errorMessage: 'Password must be at least 6 characters long',
		},
		matches: {
			options: /^(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,24}$/,
			errorMessage: 'Password must contain at least one special character and one uppercase letter',
		},
		notEmpty: {
			errorMessage: 'Password must not be empty',
		},
	},
};

// RESERVATION VALIDATIONS

export const createReservation = {
	name: {
		isString: {
			errorMessage: 'Name must be a string',
		},
		notEmpty: {
			errorMessage: 'Name must not be empty',
		},
	},
	price: {
		isString: {
			errorMessage: 'Price must be a string',
		},
		notEmpty: {
			errorMessage: 'Price must not be empty',
		},
	},
	date: {
		isDate: {
			errorMessage: 'Date must be a valid date',
		},
		notEmpty: {
			errorMessage: 'Date must not be empty',
		},
	},
};
