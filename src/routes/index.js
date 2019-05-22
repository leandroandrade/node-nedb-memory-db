'use strict';

const express = require('express');
const router = express.Router();

const { version } = require('../../package')

router.get('/', function (req, res, next) {
    res.status(200).send({
        title: "node-nedb-memory-db working",
        version
    });
});

module.exports = router;