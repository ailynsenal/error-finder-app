import express from 'express';
import serverless from 'serverless-http';
import cors from 'cors';

const app = express();
const router = express.Router();

const baseURL = 'https://s3.eu-west-2.amazonaws.com';
const corsOptions = {
  origin: '*',
  methods: 'GET',
};

app.use(cors(corsOptions));

router.get('/', (req, res) => {
  res.send('App is running..');
});

router.get('/activities', async (request, response) => {
	try {
		const url = `${baseURL}/interview.mock.data/payload.json`;

		const resp = await fetch(url, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		}).then(res => res.json());

		return response.send(resp);
	}
	catch (err) {
		response.status(500).send('Server Error')
	}
});

app.use('/.netlify/functions/api', router);
export const handler = serverless(app);