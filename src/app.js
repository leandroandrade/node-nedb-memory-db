'use strict';

const express = require('express');
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

module.exports = (db) => {
    app.use('/', require('./routes/index'));
    app.use('/users', require('./routes/users')(db));

    return app
};