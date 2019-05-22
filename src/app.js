'use strict';

const express = require('express');
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use('/', require('./routes/index'));
app.use('/users', require('./routes/save-user'));
app.use('/users', require('./routes/search-all-users'));

module.exports = app;