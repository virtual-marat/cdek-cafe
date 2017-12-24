'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl',
    name: 'client'
  });
}])

.controller('View1Ctrl', ['$scope', 'Users', "$rootScope", "$location", function($scope, Users, $rootScope, $location) {

  $scope.signIn = function(user, signInForm) {
    if (signInForm.$valid) {
      angular.extend(user, { balance: 100 });
      if (Users.saveUser(user)) {
        $rootScope.currentUser = user;
        $location.path('/profile');
      }
    }
  };

  $scope.go = function(path) {
    $location.path(path);
  };

}]);