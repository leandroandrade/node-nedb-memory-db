'use strict';

const router = require('express').Router();

module.exports = (db) => {
    const saveController = require('../controllers/save-user-controller')(db);
    const searchController = require('../controllers/search-all-user-controller')(db);

    router.post('/', saveController.save)
        .get('/', searchController.all);

    return router;
};