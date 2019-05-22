'use strict';

const db = require('../database/db');

exports.all = async (req, res) => {
    const users = await db.getUserDB().find({}, { _id: 0 }).sort({ username: 1 }).exec();

    res.status(200).send({
        users
    });
};