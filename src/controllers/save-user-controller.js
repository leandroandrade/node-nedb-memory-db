'use strict';

const uuid = require('uuid/v4');

const generateUUID = () => uuid();

module.exports = (db) => ({

    save: async (req, res) => {
        const newUser = req.body;

        newUser.uuid = generateUUID();

        const user = await db.getUserDB().insert(newUser);

        delete user._id;

        res.status(201).send({ user });
    }
});