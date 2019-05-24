'use strict';
const db = require('./src/database/db')('users.db');

const app = require('./src/app')(db);

const port = process.env.PORT || '3000';

app.listen(port, () => console.log(`node-nedb-memory-db start on port ${ port }`));