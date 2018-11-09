// Import MySQL connection.
var connection = require("../config/connection.js");


// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }
}

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
  updateOne: function (condition, cb) {
    var queryString = "UPDATE ?? SET ?? = ? WHERE " + condition;
    connection.query(queryString, ["burgers", "devoured", true], function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    })

    // var queryString = "UPDATE burgers SET devoured = true WHERE " + condition;
    // console.log(queryString);
    // // objToSql(objColVals)
    // connection.query(queryString, function (err, result) {
    //   if (err) {
    //     throw err;
    //   }
    //   cb(result);
    // })
  }

};


// Export the orm object for the model (burger.js).
module.exports = orm;