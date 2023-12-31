import axios from 'axios';
import express from 'express';
import cors from 'cors';

const app = express();

const baseURL = 'https://s3.eu-west-2.amazonaws.com';

const corsOptions = {
	origin: 'http://localhost:3000',
	methods: 'GET'
};

app.use(cors(corsOptions))
app.get('/activities', (request, response) => {
	axios({
		method: 'GET',
		url: `${baseURL}/interview.mock.data/payload.json`,
	}).then((res) => {
		response.send(res.data);
	})
})
app.listen(3001);