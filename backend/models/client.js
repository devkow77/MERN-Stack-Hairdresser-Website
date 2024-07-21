import mongoose from 'mongoose';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneRegex = /^\d{9}$/;

const clientSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true,
	},
	surname: {
		type: String,
		required: true,
		trim: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
		lowercase: true,
		match: [emailRegex, 'Invalid email address'],
		trim: true,
	},
	phoneNumber: {
		type: String,
		required: true,
		unique: true,
		match: [phoneRegex, 'Must contain exactly 9 digits'],
	},
	password: {
		type: String,
		required: true,
		trim: true,
	},
});

const Client = mongoose.model('Client', clientSchema);

export default Client;
