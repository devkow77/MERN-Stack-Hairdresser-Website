import { Router } from 'express';
import { validationResult, matchedData, checkSchema } from 'express-validator';
import { createClient } from '../middlewares/validations.js';
import Client from '../models/client.js';
import { hashPassword } from '../utils/helpers.js';
import passport from 'passport';
import '../strategies/local.js';

const router = Router();

router.post('/create', checkSchema(createClient), async (req, res) => {
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

router.post('/auth', passport.authenticate('local'), (req, res) => {
	return res.sendStatus(200);
});

router.get('/auth/status', (req, res) => {
	return req.user ? res.status(200).send(req.user) : res.status(404).send({ msg: 'Not authenticated client!' });
});

router.get('/logout', (req, res) => {
	if (!req.user) {
		return res.status(401).send({ msg: 'Client is not logged in!' });
	}

	res.clearCookie('connect.sid');

	return res.status(200).send({ msg: 'Client has been logout!' });
});

export default router;
