DROP DATABASE IF EXISTS posts;
CREATE DATABASE posts;

\c posts;

CREATE TABLE post (
  ID SERIAL PRIMARY KEY,
  username VARCHAR,
  post_title VARCHAR,
  post_content VARCHAR
);



INSERT INTO post (username, post_title, post_content)
  VALUES ('Mr. Sure Test', 'Test test test', 'Hello World Test!!!');
INSERT INTO post (username, post_title, post_content)
  VALUES ('Mr. Sure Test 1 ', 'Test test test 1 ', ' 1 Hello World Test!!!');
INSERT INTO post (username, post_title, post_content)
  VALUES ('Mr. Sure Test 2 ', 'Test test test 2 ', ' 2 Hello World Test!!!');
INSERT INTO post (username, post_title, post_content)
  VALUES ('Mr. Sure Test 3 ', 'Test test test 3 ', ' 3 Hello World Test!!!');

