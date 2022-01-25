const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const dataRoutes = require('./routes/reportRouter');

const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors());

app.use('/api', dataRoutes);

// app.post('/creatApiKey', authorizeAdmin, Controller.createApiKeyController);
app.get('/', (req, res) => {
	return res.send('Advertiser Reporting API');
});

app.all('*', (req, res) => {
	return res.status(400).json(
		Response.failure({
			error: 'INVALID_ROUTE',
			message: "Route doesn't exist",
		})
	);
});

module.exports = app;
