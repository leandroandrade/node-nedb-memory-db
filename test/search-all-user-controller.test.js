'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

const app = require('../src/app');

describe('get users', function () {
    it('should return all users', function () {

        chai.request(app)
            .get('/users')
            .end((err, res) => {
                expect(res.statusCode).to.equal(200);

                const payload = res.body;

                expect(payload).to.be.an('object');
            })
    });

    it('should return all property users', function () {

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

            })
    });
});