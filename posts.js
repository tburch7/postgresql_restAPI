
var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/posts';
var db = pgp(connectionString);

// add query functions

module.exports = {
  getAllPosts: getAllPosts,
  getSinglePost: getSinglePost,
  createPost: createPost,
  updatePost: updatePost,
  removePost: removePost
};


function getAllPosts(req, res, next) {
  db.any('SELECT * FROM post')
    .then(function (data) {

      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "X-Requested-With");
      res.header("Access-Control-Allow-Headers", "Content-Type");
      res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");

      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL posts'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}


function getSinglePost(req, res, next) {
  var postID = parseInt(req.params.id);
  db.one('SELECT * FROM post WHERE ID = $1', postID)
    .then(function (data) {

      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "X-Requested-With");
      res.header("Access-Control-Allow-Headers", "Content-Type");
      res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");

      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ONE post'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}


function createPost(req, res, next) {
  //req.body.age = parseInt(req.body.age);
  db.none('INSERT INTO post(username, post_title, post_content)' +
      'VALUES(${username}, ${post_title}, ${post_content})',
    req.body)
    .then(function () {
      
      res.status(200)
        .json({
          status: 'success',
          message: 'Inserted one post'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}


function updatePost(req, res, next) {
  db.none('UPDATE post SET username=$1, post_title=$2, post_content=$3 WHERE id=$4',
    //[req.body.name, req.body.breed, parseInt(req.body.age),
    //  req.body.sex, parseInt(req.params.id)]) 
    [req.body.username, req.body.post_title, req.body.post_content, parseInt(req.params.id)])
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Updated post'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}


function removePost(req, res, next) {
  var postID = parseInt(req.params.id);
  db.result('DELETE FROM post WHERE id = $1', postID)
    .then(function (result) {
      /* jshint ignore:start */
      res.status(200)
        .json({
          status: 'success',
          message: `Removed ${result.rowCount} post`
        });
      /* jshint ignore:end */
    })
    .catch(function (err) {
      return next(err);
    });
}








