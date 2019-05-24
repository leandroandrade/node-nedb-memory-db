'use strict';

const uuid = require('uuid/v4');

module.exports = (db) => {

    async function save(req, res) {
        const newUser = req.body;

        newUser.uuid = uuid();

        const user = await db.getUserDB().insert(newUser);

        delete user._id;

        return res.status(201).send({ user });
    }

    return {
        save
    };
};