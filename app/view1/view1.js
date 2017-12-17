'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl',
    name: 'client'
  });
}])

.controller('View1Ctrl', ['$scope', function($scope) {

  $scope.signIn = function(user, signInForm) {
    if (signInForm.$valid) {
      return;
    }
  };

}]);