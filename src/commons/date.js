'use strict';

module.exports = {

    toDate: function (date) {
        if (!date) {
            const hoje = new Date();
            let dd = hoje.getDate();
            let mm = hoje.getMonth() + 1;

            const yyyy = hoje.getFullYear();
            if (dd < 10) {
                dd = '0' + dd;
            }
            if (mm < 10) {
                mm = '0' + mm;
            }
            date = dd + '-' + mm + '-' + yyyy;
        }

        const [day, month, year] = date.split("-");
        return [year, month, day].join('-');
    }
};