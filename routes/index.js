var express = require('express');
var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

var path = require('path');

router.get('/index', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../views', 'index.html'));
});


var post_db = require('../posts');

router.get('/api/posts', post_db.getAllPosts);
router.get('/api/posts/:id', post_db.getSinglePost);
router.post('/api/posts', post_db.createPost);
router.put('/api/posts/:id', post_db.updatePost);
router.delete('/api/posts/:id', post_db.removePost);

module.exports = router;
