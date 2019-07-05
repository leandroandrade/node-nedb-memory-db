'use strict';

const { toDate } = require('../src/commons/date');

describe('test date convert', function () {
    it('pass date DD-MM-YYYY should return YYYY-MM-DD', (done) => {

        const day = '15';
        const month = '02';
        const year = '2019';

        const date = toDate(`${ day }-${ month }-${ year }`);

        expect(date).toBe(`${ year }-${ month }-${ day }`);

        return done();

    });

    it('today date should return YYYY-MM-DD', (done) => {
        const today = new Date();

        let day = today.getDate();
        let month = today.getMonth() + 1;

        const year = today.getFullYear();

        if (day < 10) {
            day = '0' + day;
        }
        if (month < 10) {
            month = '0' + month;
        }

        const date = toDate(undefined);

        expect(date).toBe(`${ year }-${ month }-${ day }`);

        return done();

    });
});