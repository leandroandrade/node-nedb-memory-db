'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

const db = require('../src/database/db')('./test/users.test.db');
const app = require('../src/app')(db);

describe('get users', function () {
    it('should return all users', (done) => {

        chai.request(app)
            .get('/users')
            .end((err, res) => {
                expect(res.statusCode).to.equal(200);

                const payload = res.body;

                expect(payload).to.be.an('object');

                done();
            })
    });

    it('should return all property users', (done) => {

        chai.request(app)
            .get('/users')
            .end((err, res) => {
                expect(res.statusCode).to.equal(200);

                const payload = res.body;
                expect(payload).to.be.an('object');

                const { users } = payload;

                for (const user in users) {
                    expect(user).to.not.have.property('username');
                    expect(user).to.not.have.property('password');
                    expect(user).to.not.have.property('uuid');
                }

                done();

            })
    });
});