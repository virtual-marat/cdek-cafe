'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl',
    menu: 'client'
  });
}])

.controller('HomeCtrl', ['$scope', 'Users', "$rootScope", "$location", function($scope, Users, $rootScope, $location) {

  $scope.signAction = function(user, signForm, action) {
    signForm.$setSubmitted();
    if (signForm.$valid) {
      switch(action) {
        case 'signUp':
          angular.extend(user, { balance: 100 });
          Users.saveUser(user);
          $rootScope.currentUser = user;
          $location.path('/client');
          break;
        case 'signIn':
          break;
      }
    }
  };

}]);