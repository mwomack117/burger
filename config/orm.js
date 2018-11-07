// Import MySQL connection.
var connection = require("../config/connection.js");


// Object for all SQL statement functions
var orm = {
    selectAll: function (cb) {
        var queryString = "SELECT * FROM burgers;";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function (cols, vals, cb) {
        var queryString = "INSERT INTO burgers (??) VALUES (?);";
        connection.query(queryString, [cols, vals], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })
    },
    updateOne: function (cb) {

    }

};


// Export the orm object for the model (burger.js).
module.exports = orm;