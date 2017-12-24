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

  $scope.signAction = function(user, signForm, action) {
    signForm.$setSubmitted();
    if (signForm.$valid) {
      switch(action) {
        case 'signUp':
          angular.extend(user, { balance: 100 });
          Users.saveUser(user);
          $rootScope.currentUser = user;
          $location.path('/profile');
          break;
        case 'signIn':
          break;
      }
    }
  };

  $scope.go = function(path) {
    $location.path(path);
  };

}]);