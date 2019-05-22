'use strict';

const router = require('express').Router();
const controller = require('../controllers/search-all-user-controller');

router.get('/', controller.all);

module.exports = router;