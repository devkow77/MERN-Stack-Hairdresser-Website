import passport from 'passport';
import { Strategy } from 'passport-local';
import Client from '../models/client.js';
import { comparePassword } from '../utils/helpers.js';

passport.serializeUser((client, done) => {
	done(null, client.id);
});

passport.deserializeUser(async (id, done) => {
	try {
		const findClient = await Client.findById(id);
		if (!findClient) {
			throw new Error('Client not found!');
		}

		done(null, findClient);
	} catch (err) {
		done(err, null);
	}
});

export default passport.use(
	new Strategy({ usernameField: 'email' }, async (email, password, done) => {
		try {
			const findClient = await Client.findOne({ email });
			if (!findClient) {
				throw new Error('Client not found!');
			}
			if (!comparePassword(password, findClient.password)) {
				throw new Error('Wrong password!');
			}

			done(null, findClient);
		} catch (err) {
			done(err, null);
		}
	})
);
