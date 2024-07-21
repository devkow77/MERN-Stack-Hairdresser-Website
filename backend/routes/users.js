import { Router } from 'express';
import { validationResult, matchedData, checkSchema } from 'express-validator';
import { createUserValidation, authUserValidation } from '../middlewares/validations.js';
import Client from '../models/client.js';
import { comparePassword, hashPassword } from '../utils/helpers.js';

const router = Router();

router.post('/create', checkSchema(createUserValidation), async (req, res) => {
	const result = validationResult(req);

	if (!result.isEmpty()) {
		return res.status(400).send(result.array());
	}

	const data = matchedData(req);

	try {
		const findUserByEmail = await Client.findOne({ email: data.email });
		if (findUserByEmail) {
			return res.status(400).send({ msg: 'Client already exists with this email!' });
		}
	} catch (err) {
		return res.status(400).send(err);
	}

	try {
		const findUserByPhoneNumber = await Client.findOne({ phoneNumber: data.phoneNumber });
		if (findUserByPhoneNumber) {
			return res.status(400).send({ msg: 'Client already exists with this phoneNumber!' });
		}
	} catch (err) {
		return res.status(400).send(err);
	}

	try {
		const newClient = new Client(data);
		newClient.password = hashPassword(data.password);
		const savedClient = await newClient.save();
		return res.status(200).send({ msg: 'Created new client in database!', data: savedClient });
	} catch (err) {
		return res.status(500).send({ msg: 'Cannot create new client in database!', err });
	}
});

router.post('/auth', checkSchema(authUserValidation), async (req, res) => {
	const result = validationResult(req);

	if (!result.isEmpty()) {
		return res.status(400).send(result.array());
	}

	const data = matchedData(req);

	try {
		const findClient = await Client.findOne({ email: data.email });

		if (!findClient || !comparePassword(data.password, findClient.password)) {
			return res.status(400).send({ msg: 'Client does not exist!' });
		}

		return res.status(200).send({ msg: 'Client logged in!', data: findClient });
	} catch (err) {
		return res.status(500).send({ msg: 'Cannot find client in database!', err });
	}
});

router.get('/auth/status', (req, res) => {
	console.log(req);
	return req.user ? res.status(200).send(req.user) : res.status(404).send({ msg: 'Not authenticated user!' });
});

export default router;
