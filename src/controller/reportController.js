const { runQuery } = require('../database/adapters/sql');

module.exports = {
	getAdvertiserData: async (req, res) => {
		try {
			var queryParams = req.query;
			if (!queryParams.siteId) {
				return res.status(400).json({ error: 'Site Id is required' });
			}
			var selectClause = 'SELECT *';
			var fromClause = ' from advertiserReport ';
			var whereClause = 'WHERE siteId=' + queryParams.siteId;

			var groupByClause = ' GROUP BY siteId,advertiserDomain';

			if (queryParams.country) {
				whereClause += ' AND cid IN [' + queryParams.country + ']';
			}
			if (queryParams.device_type) {
				whereClause += ' AND device_type IN [' + queryParams.country + ']';
			}

			var query = selectClause + fromClause + whereClause;
			console.log(query);
			Promise.resolve(runQuery(query))
				.then((data) => {
					return res.status(200).json(data);
				})
				.catch((e) => {
					console.error(e);
					return res.status(500).message('Internal Server error');
				});
		} catch (e) {
			console.error(e);
			return res.status(500).message('Internal Server error');
		}
	},
	getUrlData: async (req, res) => {
		try {
			var queryParams = req.query;
			if (!queryParams.siteId) {
				return res.status(400).json({ error: 'Site Id is required' });
			}
			var selectClause = 'SELECT *';
			var fromClause = ' from urlReport ';
			var whereClause = 'WHERE siteId=' + queryParams.siteId;

			var groupByClause = ' GROUP BY siteId,url';

			if (queryParams.country) {
				whereClause += ' AND cid IN [' + queryParams.country + ']';
			}
			if (queryParams.device_type) {
				whereClause += ' AND device_type IN [' + queryParams.country + ']';
			}

			var query = selectClause + fromClause + whereClause;
			console.log(query);
			Promise.resolve(runQuery(query))
				.then((data) => {
					return res.status(200).json(data);
				})
				.catch((e) => {
					console.error(e);
					return res.status(500).message('Internal Server error');
				});
		} catch (e) {
			console.error(e);
			return res.status(500).message('Internal Server error');
		}
	},
};
