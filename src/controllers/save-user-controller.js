'use strict';

const db = require('../database/db');

const uuid = require('uuid/v4');

exports.save = async (req, res) => {
    const newUser = req.body;

    newUser.uuid = uuid();

    const user = await db.getUserDB().insert(newUser);

    delete user._id;

    res.status(201).send({
        user
    });
};