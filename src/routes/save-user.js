'use strict';

const router = require('express').Router();

const controller = require('../controllers/save-user-controller');

router.post('/', controller.save);

module.exports = router;