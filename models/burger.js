// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll(function(res) {
            cb(res);
        });
    },

    insertOne: function(cols, vals, cb) {
        orm.insertOne(cols, vals, cb, function(res) {
            cb(res);
        });
    },

    updateOne: function(cb) {

    }

}



// Export the database functions for the controller (burger_controller.js).
module.exports = burger;
