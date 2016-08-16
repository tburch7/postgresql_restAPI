
var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/posts';
var db = pgp(connectionString);

//jwt token
// var jwt = require('jsonwebtoken');
// app.use(expressJWT({secret: ' some secret'}).unless({path: ('/login','/register')}));


// add query functions


module.exports = {
  getAllUsers: getAllUsers,
};

function getAllUsers(req, res, next) {
  db.any('SELECT * FROM login')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL users'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}