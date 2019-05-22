'use strict';

const router = require('express').Router();

const saveController = require('../controllers/save-user-controller');
const searchController = require('../controllers/search-all-user-controller');

router.post('/', saveController.save)
    .get('/', searchController.all);

module.exports = router;