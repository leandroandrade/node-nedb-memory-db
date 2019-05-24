'use strict';

const router = require('express').Router();

const db = require('../database/db');

const saveController = require('../controllers/save-user-controller')(db);
const searchController = require('../controllers/search-all-user-controller')(db);

router.post('/', saveController.save)
    .get('/', searchController.all);

module.exports = router;