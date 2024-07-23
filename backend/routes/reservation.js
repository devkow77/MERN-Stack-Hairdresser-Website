import { Router } from 'express';
import { checkSchema, validationResult, matchedData } from 'express-validator';
import Reservation from '../models/reservation.js';
import { createReservation } from '../middlewares/validations.js';

const router = Router();

router.post('/create', checkSchema(createReservation), async (req, res) => {
	const result = validationResult(req);

	if (!result.isEmpty()) {
		return res.status(400).send(result.array());
	}

	if (!req.session.passport) {
		return res.status(400).send({ msg: 'You need to log in to make reservation!' });
	}

	const data = matchedData(req);

	try {
		const createReservation = new Reservation({ ...data, client: req.user });
		const savedReservation = await createReservation.save();
		return res.status(200).send({ msg: 'Reservation created', data: savedReservation });
	} catch (err) {
		return res.status(400).send({ msg: 'Cannot make reservation', err });
	}
});

router.get('/all', async (req, res) => {
	if (!req.user) {
		return res.status(400).send({ msg: 'Required token authorization!' });
	} else {
		try {
			const findAllReservations = await Reservation.find({
				'client._id': req.session.passport.user,
			});

			if (!findAllReservations.length) {
				return res.status(400).send({ msg: 'No reservations' });
			}

			return res.status(200).send({ msg: 'All reservations', data: findAllReservations });
		} catch (err) {
			return res.status(400).send({ msg: 'Cannot find reservations', err });
		}
	}
});

export default router;
