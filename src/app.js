'use strict';

const express = require('express');
const app = express();
const bodyParser = require("body-parser");

const db = require('./database/db');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users')(db));

module.exports = app;