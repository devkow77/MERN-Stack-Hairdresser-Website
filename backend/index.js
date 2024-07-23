import express from 'express';
import { PORT } from './config.js';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config';
import usersRoute from './routes/users.js';
import reservationRoute from './routes/reservation.js';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import passport from 'passport';

const app = express();

app.use(express.json());
app.use(cors());
app.use(
	session({
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: false,
		cookie: {
			maxAge: 60 * 60 * 1000,
		},
		store: MongoStore.create({
			mongoUrl: process.env.MONGODB_URL,
		}),
	})
);
app.use(passport.initialize());
app.use(passport.session());
app.use('/api/users', usersRoute);
app.use('/api/reservation', reservationRoute);

app.listen(PORT, () => {
	mongoose
		.connect(process.env.MONGODB_URL)
		.then(() => {
			console.log('Connected with MongoDB!');
		})
		.catch((err) => {
			console.log(err);
		});

	console.log(`Server started on port ${PORT}`);
});
