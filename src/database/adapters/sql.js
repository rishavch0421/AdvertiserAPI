const sql = require('mssql');
const Config = require('../../config/config');

const config = {
	server: Config.sql.SERVER,
	user: Config.sql.USER,
	password: Config.sql.PASSWORD,
	database: Config.sql.DATABASE,
	pool: {
		max: 10,
		min: 0,
		idleTimeoutMillis: 30000,
	},
	requestTimeout: 600000,
	connectionTimeout: 600000,
	options: {
		enableArithAbort: true,
		encrypt: true,
	},
};

const runQuery = (query) => {
	return new Promise(function (resolve, reject) {
		sql
			.connect(config)
			.then((pool) => {
				return pool.request().query(query);
			})
			.then((result) => {
				resolve(result.recordset);
			})
			.catch((err) => {
				console.error(err);
				reject(new Error(err.message));
			});
	});
};

module.exports = {
	runQuery,
};
