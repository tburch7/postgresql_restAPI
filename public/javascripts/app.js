angular.module('Posts', [])

.controller('mainController', function($scope, $http) {

    $scope.formData = {};
    $scope.postData = {};

    // Get all posts
$scope.getPosts = function(postID){
    $http.get('/api/posts')
        .success(function(data) {
            $scope.postData = data;
            console.log(data);
    })
    .error(function(error) {
            console.log('Error: ' + error);
    });
};


    // Get single post
$scope.getsinglePosts = function(postID){
    $http.get('/api/posts/:id')
        .success(function(data) {
            $scope.postData = data;
            console.log(data);
    })
    .error(function(error) {
            console.log('Error: ' + error);
    });
};

$scope.createPost = function(postID){
    // Create a new post
    $http.post('/api/posts', $scope.formData)
        .success(function(data) {
            $scope.formData = {};
            $scope.postData = data;
            console.log(data);
        })
        .error(function(error) {
            console.log('Error: ' + error);
    });
};

    // Update a post
$scope.updatePost = function(postID){
    $http.put('/api/posts/:id', $scope.formData)
        .success(function(data) {
            $scope.formData = {};
            $scope.postData = data;
            console.log(data);
        })
        .error(function(error) {
            console.log('Error: ' + error);
    });
};


$scope.deletePost = function(postID){
    // Delete a todo
    $http.delete('/api/posts/:id' + postID)
        .success(function(data) {
            $scope.postData = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
    });
};


});