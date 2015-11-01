var db = require('../db');
var _ = require('underscore');

module.exports = {
  messages: {
    get: function (callback) {
      var queryString = 'SELECT messages.id, messages.text, messages.roomname, users.username from messages \
                          left outer join users on (messages.userId = users.id) \
                          order by messages.id DESC'
      db.query(queryString, function (err, messages) {
          console.log(messages)
          callback(err, messages);
      });

      // DB.end();
    }, // a function which produces all the messages
    post: function (params, callback) {
      var queryString = "INSERT into messages (text, userId, roomname) \
                          values (?, (select id from users where username = ? limit 1) , ?)"
      db.query(queryString, params, function (err, results) {
        if (err) {
          console.log('message: post', err);
          throw err;
        } else {
          callback(err, results);
        }
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      var queryString = 'SELECT * from users'
      db.query(queryString, function (err, users) {
        if(err) {
          console.log('user: get', err)
          throw err;
        } else {
          callback(err, users);
        }
      });
    },
    post: function (params, callback) {
      var queryString = "INSERT into users (username) values (?)"
      db.query(queryString, params, function (err, results) {
          callback(err, results);
      });
    }
  }
};

// var userExists = function (userName, callback) {
//   var DB = db();
//   DB.connect();
//   DB.query('SELECT userId, userName')

// }


