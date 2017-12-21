'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl',
    name: 'client'
  });
}])

.controller('View1Ctrl', ['$scope', 'Users', "$rootScope", function($scope, Users, $rootScope) {

  $scope.signIn = function(user, signInForm) {
    if (signInForm.$valid) {
      if (Users.saveUser(user)) {
        $rootScope.currentUser = user;
      }
    }
  };

}]);