import express from 'express';
import { PORT } from './config.js';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config';
import usersRoute from './routes/users.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/users', usersRoute);

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
