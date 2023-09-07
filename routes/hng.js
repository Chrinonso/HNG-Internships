const express = require('express');
const router = express.Router();
const getRequest = require('../controller/hng');

router.route('/').get(getRequest);

module.exports = router;