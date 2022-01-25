const app = require('./app');
const Config = require('./config/config');

app.listen(Config.PORT, (err) => {
	console.log(`Server started >>> http://localhost:${Config.PORT}`);
	if (err) {
		console.log(err);
	}
});
