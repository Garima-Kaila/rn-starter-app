/**
 * Created by garima.kaila on 2017-04-14.
 */
var {
    LOGIN
} = require('./types');

var reducers = {


    loginSuccess: function (userDetails) {
        return {
            type: LOGIN,
            userDetails
        };
    }


};

module.exports = reducers;