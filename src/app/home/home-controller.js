angular
  .module('myBlogApp.home').controller('HomeCtrl', ['$scope',
      function($scope) {
          'use strict';
          $scope.greeting = 'Welcome to HariBlog.com &sathishBlog.com';
      }
  ]);
