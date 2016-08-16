# postgresql_restAPI

Postgresql, node.js, express-generator, pg-promise, bluebird, Angular.js

-- ***First start Postgresql
-- psql -f posts.sql
-- npm start

... ==> your intput data

//Get All Posts
place in URL: http://127.0.0.1:3002/api/posts

//Get Single Post
place in URL: http://127.0.0.1:3002/api/posts/...

// sent post, update post, delete post from command line (or use POSTMAN).
//Send Post (post)
curl --data "username=...&post_title=...&post_content=..." \
http://127.0.0.1:3002/api/posts

//Update Post (put)
$ curl -X PUT --data "username=...&post_title=...&post_content=..." \
http://127.0.0.1:3002/api/posts/...

//Delete Post (delete)
curl -X DELETE http://127.0.0.1:3002/api/posts/...


