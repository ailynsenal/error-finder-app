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

router.get('/activities', (request, response) => {
	router.get(`${baseURL}/interview.mock.data/payload.json`, (req, res) => {
		response.send(res.data);
	})
});

app.use('/api', router);
export const handler = serverless(app);