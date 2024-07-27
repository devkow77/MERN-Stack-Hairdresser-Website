import mongoose from 'mongoose';
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneRegex = /^\d{9}$/;

const reservationClientSchema = mongoose.Schema({
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
		lowercase: true,
		match: [emailRegex, 'Invalid email address'],
		trim: true,
	},
	phoneNumber: {
		type: String,
		required: true,
		match: [phoneRegex, 'Must contain exactly 9 digits'],
	},
});

const reservationSchema = mongoose.Schema({
	client: {
		type: reservationClientSchema,
		// required: true,
	},
	name: {
		type: String,
		required: true,
		trim: true,
	},
	price: {
		type: String,
		required: true,
		trim: true,
	},
	date: {
		type: Date,
		required: true,
	},
});

const Reservation = mongoose.model('Reservation', reservationSchema);

export default Reservation;
