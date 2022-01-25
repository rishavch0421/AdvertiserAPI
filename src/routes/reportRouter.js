const express = require('express');

const Controller = require('../controller/reportController');

const router = express.Router();

router.get('/advertiserreports', Controller.getAdvertiserData);

router.get('/urlReports', Controller.getUrlData);

module.exports = router;
