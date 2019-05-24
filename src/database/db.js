'use strict';

const Datastore = require('nedb-promises');

module.exports = (databaseName) => {
    let usersDB = Datastore.create({
        filename: databaseName,
        autoload: true
    });

    return {
        getUserDB: () => {
            return usersDB;
        }
    }
};